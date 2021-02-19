import React, { useState } from 'react';

import {
  CrmStatus,
  useCrmListQuery,
  useUpdateCrmGeneralMutation,
  CrmListDocument,
  CrmType,
  useListCrmsCountQuery,
  ListCrmsCountDocument,
  ListCrmFilters,
  useBulkMutation,
  useUndoEntityMutation,
  useCrmBulkDetailsLazyQuery,
  CrmBulkDetailsDocument,
  BulkOperations,
  BulkEntities,
  CrmListItem,
} from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';
import { useLocale, usePagination, useSnackbar } from 'hooks';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useCrmsSorting } from 'app/shared/useCrmsSorting/useCrmsSorting';
import { BulkForm } from 'app/project/Project.types';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { status } = useCrmQueryParams({});
  const { sorting, query: sortQuery } = useCrmsSorting();
  const { open: openSnackbar } = useSnackbar();
  const { formatMessage } = useLocale();
  const { data: countData } = useListCrmsCountQuery({
    variables: {
      type: CrmType.Relation,
    },
  });

  const [bulk] = useBulkMutation();
  const [getBulkData, { data: bulkData }] = useCrmBulkDetailsLazyQuery({ fetchPolicy: 'network-only' });
  const [undoEntity] = useUndoEntityMutation();

  const amounts =
    (countData && {
      [CrmStatus.ActionRequired]: countData.actionRequired.metadata?.total || 0,
      [CrmStatus.Active]: countData.active.metadata?.total || 0,
      [CrmStatus.Inactive]: countData.inactive.metadata?.total || 0,
    }) ??
    undefined;

  const { pagination, query: paginationQuery } = usePagination({
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();
  const [activeFilters, setActiveFilters] = useState<ListCrmFilters>({});

  const hanldeUpdateCrmStatus = async (id: string, status: CrmStatus) => {
    await updateCrmGeneral({
      variables: {
        input: {
          id,
          status,
        },
      },
      refetchQueries: [
        {
          query: CrmListDocument,
          variables: {
            type: CrmType.Relation,
          },
        },
        {
          query: ListCrmsCountDocument,
          variables: {
            type: CrmType.Relation,
            ...activeFilters,
            status,
            ...sortQuery,
            ...paginationQuery,
          },
        },
      ],
    });
  };

  const { data } = useCrmListQuery({
    variables: {
      type: CrmType.Relation,
      ...activeFilters,
      status,
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const crms: CrmItem[] = (data?.crmList.items || []).map(crm => ({
    ...mockCrm,
    ...crm,
  }));

  const handleDeleteCrm = async (id: string) => {};

  const handleFilterChange = (filters: ListCrmFilters) => {
    setActiveFilters(filters);
  };

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectItems = (items: string[]) => {
    setSelected(items);
  };

  const fetchBulkDetails = (crmItems: CrmListItem[]) => {
    getBulkData({ variables: { ids: crmItems.map(p => p.id) } });
  };

  const handleOperation = async (operation: BulkOperations, projects: CrmListItem[]) => {
    const bulkActionIds = projects.map(p => p.id);

    const { data: result } = await bulk({
      variables: {
        input: {
          operation,
          entity: BulkEntities.Ncp,
          ids: bulkActionIds,
        },
      },
      refetchQueries: [
        {
          query: CrmListDocument,
          variables: { status, ...sortQuery, ...paginationQuery },
        },
        {
          query: ListCrmsCountDocument,
          variables: {},
        },
      ],
    });

    if (!result || !result.bulk) {
      throw new Error();
    }

    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `project.${operation}.title` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `project.${operation}.details_title` }),
      onUndo: () => handleUndo(result.bulk.undoIds ?? [], bulkActionIds),
    });

    return undefined;
  };

  const handleBulk = async (crmItems: CrmListItem[], formData: unknown) => {
    const data = formData as BulkForm;

    const bulkActionIds = crmItems.map(p => p.id);
    const { data: result } = await bulk({
      variables: {
        input: {
          operation: BulkOperations.SetField,
          entity: BulkEntities.Crm,
          ids: crmItems.map(p => p.id),
          field: data.operation,
          value: data[data.operation],
        },
      },
      refetchQueries: [
        {
          query: CrmBulkDetailsDocument,
          variables: { ids: bulkActionIds },
        },
        {
          query: CrmListDocument,
          variables: { status, ...sortQuery, ...paginationQuery },
        },
        {
          query: ListCrmsCountDocument,
          variables: {},
        },
      ],
    });

    if (!result || !result.bulk) {
      throw new Error();
    }

    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `project.${BulkOperations.SetField}.title` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `project.${BulkOperations.SetField}.details_title` }),
      onUndo: () => handleUndo(result.bulk.undoIds ?? [], bulkActionIds),
    });

    return undefined;
  };

  const handleUndo = async (undoIds: string[], bulkActionIds: string[]) => {
    if (undoIds.length > 0) {
      const { data: result } = await undoEntity({
        variables: {
          input: {
            undoIds,
          },
        },
        refetchQueries: [
          {
            query: CrmBulkDetailsDocument,
            variables: { ids: bulkActionIds },
          },
          {
            query: CrmListDocument,
            variables: { status, ...sortQuery, ...paginationQuery },
          },
          {
            query: ListCrmsCountDocument,
            variables: {},
          },
        ],
      });

      if (!result || !result.undoEntity) {
        throw new Error();
      }
    }

    return undefined;
  };

  return (
    <Relations
      {...props}
      crms={crms}
      onUpdateItemStatus={hanldeUpdateCrmStatus}
      onDeleteItem={handleDeleteCrm}
      activeFilters={activeFilters}
      onFilter={handleFilterChange}
      amounts={amounts}
      sorting={sorting}
      pagination={pagination}
      bulkData={{ status: bulkData?.status?.map(s => s.value as string) ?? [], teams: ['Team 1', 'Team 2'] }}
      onBulkOpen={fetchBulkDetails}
      onSelectItems={handleSelectItems}
      selectedItems={selected}
      onBulk={handleBulk}
      onOperation={handleOperation}
    />
  );
};
