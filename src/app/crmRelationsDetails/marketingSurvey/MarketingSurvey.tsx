import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale, useModalDispatch } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Page, PageWithListsCard } from 'ui/templates';
import { HamburgerIcon } from 'ui/atoms/icons';
import { ListTableItem } from 'ui/molecules';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import {
  MarketingSurveyProps,
  ListSurveyFilters,
  SurveyItem,
  SurveyStatus,
  SurveyFilters,
} from './MarketingSurvey.types';
import { MARKETING_SURVEY_MOVABLE_HEADER_COLUMNS } from './dictionaries';
import { useStyles } from './MarketingSurvey.styles';
import { InviteForSurveyModalContainer } from './inviteForSurveyModal/InviteForSurveyModalContainer';

const SurveyCell = ({ fieldName, item }: { fieldName: keyof SurveyItem; item?: SurveyItem }) => {
  const classes = useStyles();

  if (!item?.[fieldName]) {
    return null;
  }

  if (fieldName === 'sent' || fieldName === 'completed') {
    return (
      <Typography variant="h5" color="textSecondary">
        {DateTime.fromISO(item[fieldName] as string).toLocaleString(DateTime.DATE_SHORT)}
      </Typography>
    );
  }

  if (fieldName === 'score') {
    return (
      <Typography
        variant="h4"
        className={clsx(
          classes.score,
          item[fieldName] && item[fieldName] >= 9 ? 'success' : item[fieldName] >= 7 ? 'warning' : 'error',
        )}
      >
        {item[fieldName]}
      </Typography>
    );
  }

  return (
    <Typography variant="h5" color="textSecondary">
      {item?.[fieldName] as string}
    </Typography>
  );
};

export const MarketingSurvey = ({
  isSidebarVisible,
  onSidebarOpen,
  items = [],
  activeFilters,
  onFilter,
  status,
  onStatusChange,
  sortColumn,
  sorting,
  pagination,
}: MarketingSurveyProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { open } = useModalDispatch();

  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<SurveyItem>[]>(
    MARKETING_SURVEY_MOVABLE_HEADER_COLUMNS,
  );
  const [headerCells, setHeaderCells] = useState<ListTableCell<SurveyItem>[]>([
    ...MARKETING_SURVEY_MOVABLE_HEADER_COLUMNS.map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `crm.marketing_survey.table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (headerCells: HeaderColumnItemType<SurveyItem>[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...headerCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `crm.marketing_survey.pim.table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_survey.title' })}
        to="/marketing_survey"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <>
          <PageWithListsCard<SurveyItem, SurveyStatus, ListSurveyFilters>
            isLoading={false}
            optionsMenu={{
              onDelete: (item: SurveyItem) => {},
              hideEditButton: true,
              renderChildren: (item: SurveyItem) => (
                <ListOptionsMenuItem
                  title={formatMessage({ id: 'crm.details.marketing_survey.invite_again' })}
                  onClick={() => {}}
                />
              ),
            }}
            baseRoute={`${joinUrlParams(baseUrl, urlParams)}/marketing_survey/:id`}
            header={{
              titleId: 'crm.details.marketing_survey.title',
              addButtonTextId: 'crm.details.marketing_survey.invite_for_enquete',
              onAdd: () => open('invite-for-survey'),
            }}
            cardTitleId={'crm.details.marketing_survey.surveys_sent'}
            views={[
              {
                viewIcon: <HamburgerIcon />,
                renderViewComponent: (item: SurveyItem) => (
                  <ListTableItem
                    renderCell={(fieldName, item) => <SurveyCell fieldName={fieldName} item={item} />}
                    headerCells={headerCells}
                    item={item}
                  />
                ),
                isTable: true,
                isActive: true,
              },
            ]}
            filters={{
              activeFilters,
              availableFilters: SurveyFilters,
              onDelete: onFilter,
            }}
            actionTabs={{
              tabs: Object.keys(SurveyStatus).map(key => ({
                value: key,
                amount: 3,
                label: `dictionaries.marketing_survey_status.${key}`,
              })),
              onStatusChange,
              status,
            }}
            tableHeader={{
              sortKey: sortColumn as keyof SurveyItem,
              cells: headerCells,
              columns: movableHeaderCells,
              setColumns: columns => changeHeaderCells(columns),
            }}
            list={{
              items,
              itemIndex: 'id',
              emptyTitle: formatMessage({ id: 'crm.details.marketing_survey.empty_title' }),
              emptyDescription: formatMessage({ id: 'crm.details.marketing_survey.empty_description' }),
              pagination,
              sortOptions: sorting.sortOptions,
              onSort: sorting.onSort,
            }}
          />
        </>
      </Page>
      <InviteForSurveyModalContainer />
    </>
  );
};
