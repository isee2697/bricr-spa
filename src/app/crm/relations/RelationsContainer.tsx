import React, { useState } from 'react';

import {
  CrmStatus,
  useCrmListQuery,
  useUpdateCrmGeneralMutation,
  CrmListDocument,
  CrmType,
  useListCrmsCountQuery,
  ListCrmsCountDocument,
  BulkOperations,
  ListCrmFilters,
  useBulkMutation,
  useUndoEntityMutation,
  CrmBulkDetailsDocument,
  BulkEntities,
} from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';
import { useLocale, usePagination, useSnackbar } from 'hooks';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useCrmsSorting } from 'app/shared/useCrmsSorting/useCrmsSorting';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { status } = useCrmQueryParams({});
  const { sorting, query: sortQuery } = useCrmsSorting('table');
  const { open: openSnackbar } = useSnackbar();
  const { formatMessage } = useLocale();

  const { data: countData } = useListCrmsCountQuery({
    variables: {
      type: CrmType.Relation,
    },
    fetchPolicy: 'no-cache',
  });

  const [bulk] = useBulkMutation();
  const [undoEntity] = useUndoEntityMutation();
  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();

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

  const [activeFilters, setActiveFilters] = useState<ListCrmFilters>({});

  const hanldeUpdateCrmStatus = async (id: string, newStatus: CrmStatus) => {
    try {
      await updateCrmGeneral({
        variables: {
          input: {
            id,
            status: newStatus,
          },
        },
        refetchQueries: [
          {
            query: CrmListDocument,
            variables: {
              type: CrmType.Relation,
              ...activeFilters,
              status,
              ...sortQuery,
              ...paginationQuery,
            },
          },
          {
            query: ListCrmsCountDocument,
            variables: {
              type: CrmType.Relation,
            },
          },
        ],
      });
    } catch (e) {}
  };

  const { data, loading } = useCrmListQuery({
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

  const handleFilterChange = (filters: ListCrmFilters) => {
    setActiveFilters(filters);
  };

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectItems = (items: string[]) => {
    setSelected(items);
  };

  const handleOperation = async (operation: BulkOperations, projects: CrmItem[]) => {
    const bulkActionIds = projects.map(p => p.id);

    const { data: result } = await bulk({
      variables: {
        input: {
          operation,
          entity: BulkEntities.Crm,
          ids: bulkActionIds,
        },
      },
      refetchQueries: [
        {
          query: CrmListDocument,
          variables: {
            type: CrmType.Relation,
            status,
            ...activeFilters,
            ...sortQuery,
            ...paginationQuery,
          },
        },
        {
          query: ListCrmsCountDocument,
          variables: {
            type: CrmType.Relation,
          },
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
            variables: {
              type: CrmType.Relation,
              status,
              ...activeFilters,
              ...sortQuery,
              ...paginationQuery,
            },
          },
          {
            query: ListCrmsCountDocument,
            variables: {
              type: CrmType.Relation,
            },
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
      loading={loading}
      crms={crms}
      onUpdateItemStatus={hanldeUpdateCrmStatus}
      activeFilters={activeFilters}
      onFilter={handleFilterChange}
      amounts={amounts}
      sorting={sorting}
      pagination={pagination}
      onSelectItems={handleSelectItems}
      selectedItems={selected}
      onOperation={handleOperation}
    />
  );
};
