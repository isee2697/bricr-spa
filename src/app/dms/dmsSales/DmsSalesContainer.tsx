import React from 'react';

import { SalesLabel } from 'api/types';
import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';

import { DmsSales } from './DmsSales';

export const DmsSalesContainer = () => {
  const { data, loading } = useGetSalesList(SalesLabel.Order);

  return <DmsSales sales={data} isLoading={loading} />;
};
