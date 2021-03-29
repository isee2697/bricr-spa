import React from 'react';

import { useGetSalesList } from 'hooks/useGetSalesList/useGetSalesList';
import { SalesLabel } from 'api/types';

import { DmsSales } from './DmsSales';
import { DmsSalesContainerProps } from './DmsSales.types';

export const DmsSalesContainer = ({ type }: DmsSalesContainerProps) => {
  const { data, loading } = useGetSalesList(type as SalesLabel);

  return <DmsSales sales={data} isLoading={loading} type={type} />;
};
