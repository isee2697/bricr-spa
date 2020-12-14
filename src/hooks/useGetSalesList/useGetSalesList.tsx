import { useEffect, useState } from 'react';
import { useQueryParam } from 'use-query-params';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { SalesStatus, SalesLabel } from 'api/types';
import { GetSalesListData } from 'app/sales/salesAcquisition/SalesAcquisition.types';

export const useGetSalesList = (label?: SalesLabel) => {
  const { accessToken } = useAuthState();
  const [sortType = '', setSortType] = useQueryParam<string>('sortType');
  const [status = SalesStatus.ActionRequired, setStatus] = useQueryParam<SalesStatus>('status');
  const [data, setData] = useState<GetSalesListData | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSalesList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_FILE_URL}/get-sales-list?label=${label}&status=${status}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accessToken,
            },
          },
        );

        if (response.ok) {
          const sales: GetSalesListData = await response.json();

          setData(sales);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch sales list from server');
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    setLoading(true);
    getSalesList();
  }, [accessToken, label, status]);

  return { data, loading, error, status, setStatus, sortType, setSortType };
};
