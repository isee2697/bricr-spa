import React, { useState } from 'react';

import {
  CrmStatus,
  useCrmListQuery,
  useUpdateCrmGeneralMutation,
  CrmListDocument,
  ListPimsFilters,
  PropertyType,
  CrmType,
  useListCrmsCountQuery,
  ListCrmsCountDocument,
} from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';
import { usePagination } from 'hooks';
import { useCrmQueryParams } from 'app/shared/useCrmQueryParams/useCrmQueryParams';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useCrmsSorting } from 'app/shared/useCrmsSorting/useCrmsSorting';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { status } = useCrmQueryParams({});
  const { sorting, query: sortQuery } = useCrmsSorting();
  const { data: countData } = useListCrmsCountQuery({
    variables: {
      type: CrmType.Relation,
    },
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

  const { data } = useCrmListQuery({
    variables: {
      type: CrmType.Relation,
      status,
      ...sortQuery,
      ...paginationQuery,
    },
  });

  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });

  const crms: CrmItem[] = (data?.crmList.items || []).map(crm => ({
    ...mockCrm,
    ...crm,
  }));

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
          },
        },
      ],
    });
  };

  const handleDeleteCrm = async (id: string) => {};

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
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
    />
  );
};
