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
} from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';
import { usePagination, useSnackbar, useLocale } from 'hooks';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useCrmsSorting } from 'app/shared/useCrmsSorting/useCrmsSorting';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { status } = useCrmQueryParams({});
  const [viewMode, setViewMode] = useState<'list' | 'table'>('list');
  const { sorting, query: sortQuery } = useCrmsSorting(viewMode);
  const { formatMessage } = useLocale();
  const { open: openSnackbar } = useSnackbar();
  const { data: countData } = useListCrmsCountQuery({
    variables: {
      type: CrmType.Relation,
    },
    fetchPolicy: 'no-cache',
  });

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
    try {
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
    } catch (e) {}
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

  const handleDeleteCrm = async (ids: string[]) => {};

  const handleFilterChange = (filters: ListCrmFilters) => {
    setActiveFilters(filters);
  };

  const handleUndo = async (undoIds: string[], bulkActionIds: string[]) => {};

  const handleOperation = async (operation: BulkOperations, items: CrmItem[]) => {
    const bulkActionIds = items.map(item => item.id);

    if (operation === BulkOperations.Delete) {
      await handleDeleteCrm(bulkActionIds);
    }

    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `crm.${operation}.title` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `crm.${operation}.details_title` }),
      onUndo: () => handleUndo([], bulkActionIds),
    });

    return undefined;
  };

  return (
    <Relations
      {...props}
      crms={crms}
      onUpdateItemStatus={hanldeUpdateCrmStatus}
      onOperation={handleOperation}
      activeFilters={activeFilters}
      onFilter={handleFilterChange}
      amounts={amounts}
      sorting={sorting}
      pagination={pagination}
      viewMode={viewMode}
      setViewMode={setViewMode}
    />
  );
};
