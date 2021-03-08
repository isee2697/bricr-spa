import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { useLocale } from 'hooks';
import { IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { ExitIcon, HamburgerIcon, ThumbDownIcon, ThumbUpIcon } from 'ui/atoms/icons';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { PageWithListsCard } from 'ui/templates';
import { ListTableItem } from 'ui/molecules';
import { BulkField, GenderType } from 'api/types';
import { FieldChange } from 'ui/bulk/fieldChange/FieldChange';
import { MarketingOpenHouseResult, YesNo } from '../marketingOpenHouse/MarketingOpenHouse.types';

import {
  ListOpenHouseOrganizedFilters,
  MarketingOpenHouseOrganizedItem,
  MarketingOpenHouseOrganizedProps,
  MarketingOpenHouseOrganizedStatus,
} from './MarketingOpenHouseOrganized.types';
import { MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS, OpenHouseOrganizedFilters } from './dictionaries';

const OpenHouseOrganizedCell = ({
  fieldName,
  item,
}: {
  fieldName: keyof MarketingOpenHouseOrganizedItem;
  item?: MarketingOpenHouseOrganizedItem;
}) => {
  if (fieldName === 'result') {
    return item?.result === MarketingOpenHouseResult.ThumbsDownn ? <ThumbDownIcon /> : <ThumbUpIcon />;
  }

  if (fieldName === 'gender') {
    return <>{item?.gender === GenderType.Male ? 'M' : 'F'}</>;
  }

  return <>{item?.[fieldName] as string}</>;
};

export const MarketingOpenHouseOrganized = ({
  path,
  isSidebarVisible,
  onSidebarOpen,
  items,
  activeFilters,
  onFilter,
  status,
  onStatusChange,
  sortColumn,
  sorting,
  pagination,
  onBulkOpen,
  onBulk,
  bulkData,
}: MarketingOpenHouseOrganizedProps) => {
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<MarketingOpenHouseOrganizedItem>[]>(
    MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS,
  );
  const [headerCells, setHeaderCells] = useState<ListTableCell<MarketingOpenHouseOrganizedItem>[]>([
    ...MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS.map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `crm.details.marketing_open_house.table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (headerCells: HeaderColumnItemType<MarketingOpenHouseOrganizedItem>[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...headerCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `crm.details.marketing_open_house.pim.table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_open_house.title' })}
        to="/marketing_open_house"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <IconButton
            size="small"
            variant="roundedContained"
            onClick={() => push(`${joinUrlParams(baseUrl, urlParams)}/marketing_open_house`)}
          >
            <ExitIcon />
          </IconButton>
        }
      />
      <PageWithListsCard<
        MarketingOpenHouseOrganizedItem,
        MarketingOpenHouseOrganizedStatus,
        ListOpenHouseOrganizedFilters
      >
        isLoading={false}
        optionsMenu={{
          hideEditButton: true,
          onDelete: (item: MarketingOpenHouseOrganizedItem) => {},
        }}
        baseRoute={`${joinUrlParams(path, urlParams)}/:id`}
        header={{
          titleId: 'crm.detalis.marketing_open_house.title',
          hideAddButton: true,
        }}
        cardTitleId={'crm.details.marketing_open_house.visitor'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: MarketingOpenHouseOrganizedItem) => (
              <ListTableItem
                renderCell={(fieldName, item) => <OpenHouseOrganizedCell fieldName={fieldName} item={item} />}
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
          availableFilters: OpenHouseOrganizedFilters,
          onDelete: onFilter,
        }}
        actionTabs={{
          tabs: Object.keys(MarketingOpenHouseOrganizedStatus).map(key => ({
            value: key,
            amount: 3,
            label: `dictionaries.marketing_open_house_visit_status.${key}`,
          })),
          onStatusChange,
          status,
        }}
        tableHeader={{
          sortKey: sortColumn as keyof MarketingOpenHouseOrganizedItem,
          cells: headerCells,
          columns: movableHeaderCells,
          setColumns: columns => changeHeaderCells(columns),
        }}
        list={{
          items,
          itemIndex: 'id',
          emptyTitle: formatMessage({ id: 'crm.details.marketing_open_house.empty_title' }),
          emptyDescription: formatMessage({ id: 'crm.details.marketing_open_house.empty_description' }),
          pagination,
          sortOptions: sorting.sortOptions,
          onSort: sorting.onSort,
          bulkTitle: formatMessage({ id: 'crm.details.marketing_open_house.bulk.title' }),
          bulkSubmitText: formatMessage({ id: 'crm.details.marketing_open_house.bulk.submit' }),
          onBulk,
          onBulkOpen,
          bulkData,
          bulkActions: [
            {
              key: BulkField.Result,
              title: formatMessage({ id: 'crm.details.marketing_open_house.bulk.result.title' }),
              content: (
                <FieldChange
                  fieldLabelId="crm.details.marketing_open_house.bulk.result.label"
                  fieldName={BulkField.Result}
                  fieldPlaceholderId="crm.details.marketing_open_house.bulk.result.placeholder"
                  valuesFieldName={'resultValues'}
                  valuesLabel={formatMessage({ id: 'crm.details.marketing_open_house.bulk.result.values.title' })}
                  type="radiogroup"
                  xs={6}
                  radioOptions={[
                    {
                      label: formatMessage({ id: `common.${YesNo.Yes}` }),
                      value: YesNo.Yes,
                      icon: <ThumbUpIcon color="inherit" />,
                    },
                    {
                      label: formatMessage({ id: `common.${YesNo.No}` }),
                      value: YesNo.No,
                      icon: <ThumbDownIcon color="inherit" />,
                    },
                  ]}
                />
              ),
            },
          ],
        }}
      />
    </>
  );
};
