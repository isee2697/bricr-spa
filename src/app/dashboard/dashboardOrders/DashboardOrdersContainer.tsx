import React, { useEffect, useState } from 'react';

import { SalesLabel, SalesSearchResult, SalesStatus, SortDirection, useGetSalesListLazyQuery } from 'api/types';
import { useAuthState } from 'hooks';

import { DashboardOrders } from './DashboardOrders';

export const DashboardOrdersContainer = () => {
  const { accessToken } = useAuthState();
  const [selectedTab, setSelectedTab] = useState<SalesLabel>(SalesLabel.Acquisition);
  const [getSalesList, { data, loading, error }] = useGetSalesListLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleChangeOrderType = async (type: SalesLabel) => {
    setSelectedTab(type);
  };

  useEffect(() => {
    getSalesList({
      variables: {
        label: selectedTab,
        status: SalesStatus.Active,
        sortColumn: 'id',
        sortDirection: SortDirection.Desc,
      },
    });
  }, [accessToken, getSalesList, selectedTab]);

  return (
    <DashboardOrders
      currentTab={selectedTab}
      onChangeTab={handleChangeOrderType}
      orders={
        data?.getSalesList?.items?.map(salesItem => ({
          id: salesItem.id,
          addressFirstLine: 'Sales Name',
          addressSecondLine: 'C.G.M. van Gils 06-48764044',
          labels: ['Verkoop', 'Getekend'],
          price: 375500,
          packages: 3,
          image: 'http://placeimg.com/80/80/arch?t=2',
        })) || []
      }
    />
  );
};
