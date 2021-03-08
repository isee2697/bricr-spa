import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavBreadcrumb, Box } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { PageWithListsCard } from 'ui/templates';
import { HamburgerIcon, ThumbDownIcon, ThumbUpIcon } from 'ui/atoms/icons';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { ListTableItem } from 'ui/molecules';
import { FieldChange } from 'ui/bulk/fieldChange/FieldChange';
import { BulkField } from 'api/types';

import {
  ListOpenHouseFilters,
  MarketingOpenHouseItem,
  MarketingOpenHouseProps,
  MarketingOpenHouseResult,
  MarketingOpenHouseVisitStatus,
  OpenHouseFilters,
  YesNo,
} from './MarketingOpenHouse.types';
import {
  MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS,
  MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS,
} from './dictionaries';
import { useStyles } from './MarketingOpenHouse.styles';

const OpenHouseVisitedCell = ({
  fieldName,
  item,
}: {
  fieldName: keyof MarketingOpenHouseItem;
  item?: MarketingOpenHouseItem;
}) => {
  const classes = useStyles();

  if (fieldName === 'result') {
    return !!!item?.result ? (
      <>-</>
    ) : item.result === MarketingOpenHouseResult.ThumbsDownn ? (
      <Box className={classes.error}>
        <ThumbDownIcon color="inherit" />
      </Box>
    ) : (
      <Box className={classes.success}>
        <ThumbUpIcon color="inherit" />
      </Box>
    );
  }

  if (fieldName === 'price') {
    return <>€ {item?.[fieldName]}</>;
  }

  return <>{item?.[fieldName] as string}</>;
};

const OpenHouseOrganizedCell = ({
  fieldName,
  item,
}: {
  fieldName: keyof MarketingOpenHouseItem;
  item?: MarketingOpenHouseItem;
}) => {
  const classes = useStyles();

  if (!item?.[fieldName]) return null;

  if (fieldName === 'result') {
    return (
      <Box display="flex" alignItems="center">
        <Box mr={1}>6</Box>
        <Box className={classes.success}>
          <ThumbUpIcon color="inherit" />
        </Box>
        <Box ml={4} />
        <Box mr={1}>1</Box>
        <Box className={classes.error}>
          <ThumbDownIcon color="inherit" />
        </Box>
      </Box>
    );
  }

  return <>{item?.[fieldName] as string}</>;
};

export const MarketingOpenHouse = ({
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
  onBulk,
  onBulkOpen,
  bulkData,
}: MarketingOpenHouseProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();

  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<MarketingOpenHouseItem>[]>(
    MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS,
  );
  const [headerCells, setHeaderCells] = useState<ListTableCell<MarketingOpenHouseItem>[]>([
    ...MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS.map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `crm.details.marketing_open_house.table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (headerCells: HeaderColumnItemType<MarketingOpenHouseItem>[]) => {
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

  useEffect(() => {
    if (status === MarketingOpenHouseVisitStatus.Visited) {
      setMovableHeaderCells(MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS);
      setHeaderCells([
        ...MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS.map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `crm.details.marketing_open_house.table.header.${cell.value}` }),
          sortable: true,
        })),
      ]);
    } else {
      setMovableHeaderCells(MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS);
      setHeaderCells([
        ...MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS.map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `crm.details.marketing_open_house.table.header.${cell.value}` }),
          sortable: true,
        })),
      ]);
    }
  }, [formatMessage, status]);

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_open_house.title' })}
        to="/marketing_open_house"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <PageWithListsCard<MarketingOpenHouseItem, MarketingOpenHouseVisitStatus, ListOpenHouseFilters>
        isLoading={false}
        optionsMenu={{
          hideEditButton: true,
          onDelete: (item: MarketingOpenHouseItem) => {},
        }}
        baseRoute={
          status === MarketingOpenHouseVisitStatus.Visited
            ? `${joinUrlParams(baseUrl, urlParams)}/marketing_open_house/visited/:id`
            : `${joinUrlParams(baseUrl, urlParams)}/marketing_open_house/organized/:id`
        }
        header={{
          titleId: 'crm.detalis.marketing_open_house.title',
          hideAddButton: true,
        }}
        cardTitleId={'crm.details.marketing_open_house.visitor'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: MarketingOpenHouseItem) => (
              <ListTableItem
                renderCell={(fieldName, item) =>
                  status === MarketingOpenHouseVisitStatus.Visited ? (
                    <OpenHouseVisitedCell fieldName={fieldName} item={item} />
                  ) : (
                    <OpenHouseOrganizedCell fieldName={fieldName} item={item} />
                  )
                }
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
          availableFilters: OpenHouseFilters,
          onDelete: onFilter,
        }}
        actionTabs={{
          tabs: Object.keys(MarketingOpenHouseVisitStatus).map(key => ({
            value: key,
            amount: 3,
            label: `dictionaries.marketing_open_house_visit_status.${key}`,
          })),
          onStatusChange,
          status,
        }}
        tableHeader={{
          sortKey: sortColumn as keyof MarketingOpenHouseItem,
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
                      icon: (
                        <Box className={classes.success}>
                          <ThumbUpIcon color="inherit" />
                        </Box>
                      ),
                    },
                    {
                      label: formatMessage({ id: `common.${YesNo.No}` }),
                      value: YesNo.No,
                      icon: (
                        <Box className={classes.error}>
                          <ThumbDownIcon color="inherit" />
                        </Box>
                      ),
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
