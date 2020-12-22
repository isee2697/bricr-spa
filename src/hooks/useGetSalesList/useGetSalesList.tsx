import { useEffect } from 'react';
import { useQueryParam } from 'use-query-params';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { SalesStatus, SalesLabel, useGetSalesListLazyQuery, SortDirection, Sales } from 'api/types';

export const useGetSalesList = (label: SalesLabel) => {
  const { accessToken } = useAuthState();
  const [sortType = '', setSortType] = useQueryParam<string>('sortType');
  const [status = SalesStatus.ActionRequired, setStatus] = useQueryParam<SalesStatus>('status');
  const [getSalesList, { data, loading, error }] = useGetSalesListLazyQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getSalesList({
      variables: {
        label,
        status,
        sortColumn: 'id',
        sortDirection: SortDirection.Desc,
      },
    });
  }, [accessToken, getSalesList, label, status]);

  return {
    data: (data?.getSalesList?.items || []) as Sales[],
    loading,
    error,
    status,
    setStatus,
    sortType,
    setSortType,
  };
};
