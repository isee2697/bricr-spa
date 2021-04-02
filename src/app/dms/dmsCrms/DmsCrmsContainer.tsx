import React, { useState } from 'react';
import { useParams } from 'react-router';

import { CrmStatus, CrmType, ListCrmFilters, useCrmListQuery, useListCrmsCountQuery } from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { CrmItem } from 'app/crm/Crm.types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { useCrmsSorting } from 'app/shared/useCrmsSorting/useCrmsSorting';

import { DmsCrms } from './DmsCrms';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const DmsCrmsContainer = () => {
  const { type: crmType } = useParams<{ type: string }>();
  const [activeFilters] = useState<ListCrmFilters>({});

  const { data: countData } = useListCrmsCountQuery({
    variables: {
      type: crmType === 'relations' ? CrmType.Relation : CrmType.Business,
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

  const { sorting, query: sortQuery } = useCrmsSorting('table');

  const { pagination, query: paginationQuery } = usePagination({
    itemsCount: amounts ? amounts[CrmStatus.Active] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { data, loading } = useCrmListQuery({
    variables: {
      type: crmType === 'relations' ? CrmType.Relation : CrmType.Business,
      ...activeFilters,
      status: CrmStatus.Active,
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const crms: CrmItem[] = (data?.crmList.items || []).map(crm => ({
    ...mockCrm,
    ...crm,
  }));

  return <DmsCrms crms={crms} isLoading={loading} pagination={pagination} sorting={sorting} />;
};
