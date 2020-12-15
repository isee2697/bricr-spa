import React, { useEffect, useState } from 'react';

import { SalesLabel } from 'api/types';
import { GetSalesListData } from 'app/sales/salesAcquisition/SalesAcquisition.types';
import { useAuthState } from 'hooks';

import { DashboardOrders } from './DashboardOrders';

export const DashboardOrdersContainer = () => {
  const { accessToken } = useAuthState();
  const [selectedTab, setSelectedTab] = useState<SalesLabel>(SalesLabel.Acquisition);
  const [data, setData] = useState<GetSalesListData | undefined>(undefined);

  const handleChangeOrderType = async (type: SalesLabel) => {
    setSelectedTab(type);
    setData(undefined);
  };

  useEffect(() => {
    const getSalesList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-sales-list?label=${selectedTab}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const sales: GetSalesListData = await response.json();

          setData(sales);
        } else {
          throw new Error('Failed to fetch sales list from server');
        }
      } catch (error) {
        // TODO: Handle error here
      }
    };

    getSalesList();
  }, [accessToken, selectedTab]);

  return (
    <DashboardOrders
      currentTab={selectedTab}
      onChangeTab={handleChangeOrderType}
      orders={
        data
          ? data.salesItems.map(salesItem => ({
              id: salesItem.id,
              addressFirstLine: salesItem.name,
              addressSecondLine: 'C.G.M. van Gils 06-48764044',
              labels: ['Verkoop', 'Getekend'],
              price: 375500,
              packages: 3,
              image: 'http://placeimg.com/80/80/arch?t=2',
            }))
          : []
      }
    />
  );
};
