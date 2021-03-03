import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import { NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Page, PageWithListsCard } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { HamburgerIcon } from 'ui/atoms/icons';
import { ListTableItem } from 'ui/molecules';

import {
  ListMarketingNewsLetterEventFilters,
  MarketingNewLetterProps,
  MarketingNewsLetterItem,
  YesNo,
} from './MarketingNewLetter.types';
import { Meta } from './meta/Meta';
import { MarketingNewsLetterEventFilters, MARKETING_NEWSLETTER_MOVABLE_HEADER_COLUMNS } from './dictionaries';

const NewsLetterCell = ({
  fieldName,
  item,
}: {
  fieldName: keyof MarketingNewsLetterItem;
  item?: MarketingNewsLetterItem;
}) => {
  const { formatMessage } = useLocale();

  if (fieldName === 'sent') {
    return !item?.sent ? null : <>{DateTime.fromISO(item.sent).toLocaleString(DateTime.DATE_SHORT)}</>;
  }

  if (fieldName === 'bounced') {
    return <>{formatMessage({ id: !!item?.bounced ? `common.${item.bounced}` : `common.${YesNo.No}` })}</>;
  }

  if (fieldName === 'opened') {
    return <>{formatMessage({ id: !!item?.opened ? `common.${item.opened}` : `common.${YesNo.No}` })}</>;
  }

  return <>{item?.[fieldName] as string}</>;
};

export const MarketingNewLetter = ({
  isSidebarVisible,
  onSidebarOpen,
  sortColumn,
  items,
  onFilter,
  selectedItems,
  onSelectItems,
  sorting,
  activeFilters,
  pagination,
}: MarketingNewLetterProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<MarketingNewsLetterItem>[]>(
    MARKETING_NEWSLETTER_MOVABLE_HEADER_COLUMNS,
  );
  const [headerCells, setHeaderCells] = useState<ListTableCell<MarketingNewsLetterItem>[]>([
    ...MARKETING_NEWSLETTER_MOVABLE_HEADER_COLUMNS.map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `crm.details.marketing_news_letter.table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (headerCells: HeaderColumnItemType<MarketingNewsLetterItem>[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...headerCells
        .filter(cell => !cell.hidden)
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `crm.details.marketing_news_letter.table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_news_letter.title' })}
        to="/marketing_news_letter"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page title={formatMessage({ id: 'crm.details.marketing_news_letter.title' })} titleActions={<></>}>
        <Meta />
        <PageWithListsCard<MarketingNewsLetterItem, {}, ListMarketingNewsLetterEventFilters>
          isLoading={false}
          withoutHeader
          optionsMenu={{}}
          baseRoute={AppRoute.crmRelationsDetails}
          header={{
            titleId: 'crm.details.marketing_news_letter.title',
            hideAddButton: true,
          }}
          cardTitleId={'crm.details.marketing_news_letter.list_of_newsletters'}
          views={[
            {
              viewIcon: <HamburgerIcon />,
              renderViewComponent: (item: MarketingNewsLetterItem) => (
                <ListTableItem
                  renderCell={(fieldName, item) => <NewsLetterCell fieldName={fieldName} item={item} />}
                  headerCells={headerCells}
                  item={item}
                />
              ),
              isTable: true,
              isActive: true,
            },
          ]}
          filters={{ activeFilters, availableFilters: MarketingNewsLetterEventFilters, onDelete: onFilter }}
          tableHeader={{
            sortKey: sortColumn as keyof MarketingNewsLetterItem,
            cells: headerCells,
            columns: movableHeaderCells,
            setColumns: columns => changeHeaderCells(columns),
          }}
          list={{
            itemIndex: 'id',
            items,
            emptyTitle: formatMessage({ id: 'crm.details.marketing_news_letter.empty_title' }),
            emptyDescription: formatMessage({ id: 'crm.details.marketing_news_letter.empty_description' }),
            pagination,
            sortOptions: sorting.sortOptions,
            onSort: sorting.onSort,
            onSelectItems,
            selectedItems,
          }}
        />
      </Page>
    </>
  );
};
