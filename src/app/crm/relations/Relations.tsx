import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { BulkOperations, CrmStatus, CrmType, ListCrmFilters } from 'api/types';
import { PageWithListsCard } from 'ui/templates';
import { useLocale, useModalDispatch } from 'hooks';
import { CrmItem } from '../Crm.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { MoveCrmRelationContainer } from '../moveRelation/MoveCrmRelationContainer';
import {
  createActionTabsDict,
  createCrmViewsDict,
  CrmsFilters,
  FIXED_HEADER_COLUMNS,
  MOVABLE_HEADER_COLUMNS,
} from 'app/crm/dictionaries';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';

import { RelationsProps } from './Relations.types';
import { RelationMenuItems } from './relationsMenu/RelationsMenu';

export const Relations = ({
  status,
  onStatusChange,
  amounts,
  crms,
  onUpdateItemStatus,
  onOperation,
  onFilter,
  activeFilters,
  sorting,
  pagination,
  onSelectItems,
  selectedItems,
  loading,
}: RelationsProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const [movableHeaderCells, setMovableHeaderCells] = useState<HeaderColumnItemType<CrmItem>[]>(MOVABLE_HEADER_COLUMNS);
  const [headerCells, setHeaderCells] = useState<ListTableCell<CrmItem>[]>([
    ...FIXED_HEADER_COLUMNS.map(cell => ({
      field: cell as keyof CrmItem,
      label: formatMessage({ id: `table.header.${cell}` }),
      sortable: true,
    })),
    ...MOVABLE_HEADER_COLUMNS.filter(cell => !cell.hidden && !FIXED_HEADER_COLUMNS.includes(cell.value)).map(cell => ({
      field: cell.value,
      label: formatMessage({ id: `table.header.${cell.value}` }),
      sortable: true,
    })),
  ]);

  const changeHeaderCells = (headerCells: HeaderColumnItemType<CrmItem>[]) => {
    setMovableHeaderCells([...headerCells]);
    setHeaderCells([
      ...FIXED_HEADER_COLUMNS.map(cell => ({
        field: cell,
        label: formatMessage({ id: `pim.table.header.${cell}` }),
        sortable: true,
      })),
      ...headerCells
        .filter(cell => !cell.hidden && !FIXED_HEADER_COLUMNS.includes(cell.value))
        .map(cell => ({
          field: cell.value,
          label: formatMessage({ id: `pim.table.header.${cell.value}` }),
          sortable: true,
        })),
    ]);
  };

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const optionMenuItems = (item: CrmItem) => (
    <RelationMenuItems
      item={item}
      onMerge={id => push(`${AppRoute.crm}/merge/${id}`)}
      onMove={() => open('move-crm-relation')}
      onUpdateStatus={onUpdateItemStatus}
    />
  );

  return (
    <>
      <PageWithListsCard<CrmItem, CrmStatus, ListCrmFilters>
        isLoading={!!loading}
        optionsMenu={{
          onDelete: item => onOperation(BulkOperations.Delete, [item]),
          onEdit: item => push(AppRoute.crmRelationsDetails.replace(':id', item.id)),
          renderChildren: optionMenuItems,
        }}
        baseRoute={AppRoute.crmRelationsDetails}
        header={{
          addButtonTextId: `crm.add.${CrmType.Relation}`,
          onAdd: () => open('add-relation', { crmType: CrmType.Relation }),
          titleId: 'crm.title',
        }}
        cardTitleId={'crm.type.relations'}
        views={createCrmViewsDict(headerCells)}
        filters={{
          activeFilters: activeFilters,
          availableFilters: CrmsFilters,
          onDelete: onFilter,
        }}
        actionTabs={{ tabs: createActionTabsDict(amounts), onStatusChange, status }}
        tableHeader={{
          sortKey: 'firstName',
          cells: headerCells,
          columns: movableHeaderCells,
          setColumns: columns => changeHeaderCells(columns),
        }}
        list={{
          className: 'crm-list',
          items: crmItemsFiltered as CrmItem[],
          itemIndex: 'id',
          emptyTitle: formatMessage({ id: 'crm.list.empty_title' }),
          emptyDescription: formatMessage(
            { id: 'crm.list.empty_description' },
            { buttonName: formatMessage({ id: `crm.add.relations` }) },
          ),

          pagination,
          sortOptions: sorting.sortOptions,
          onSort: sorting.onSort,
          onSelectItems,
          selectedItems,
          onOperation,
        }}
      />

      <MoveCrmRelationContainer />
    </>
  );
};
