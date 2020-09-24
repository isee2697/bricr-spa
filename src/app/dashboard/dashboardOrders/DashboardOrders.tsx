import React, { useState } from 'react';

import { Tabs, Tab } from 'ui/atoms';
import { Order } from 'ui/molecules';
import { Orders } from 'ui/organisms';
import { FiltersContainer } from 'ui/molecules/filters/FiltersContainer';

import { DashboardOrdersProps } from './DashboardOrders.types';

export const DashboardOrders = ({ orders, tabs, currentTab, onChangeTab }: DashboardOrdersProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTabChange = (event: React.ChangeEvent<{}>, tabIndex: number) => {
    onChangeTab(tabIndex);
  };

  return (
    <Orders
      onAddClick={() => {}}
      onMoreClick={() => {}}
      onManageClick={() => setModalOpen(true)}
      tabs={
        <Tabs value={currentTab} onChange={handleTabChange} indicatorColor="primary">
          {tabs.map(tab => (
            <Tab label={tab} key={tab} />
          ))}
        </Tabs>
      }
    >
      {orders.map(order => (
        <Order
          labels={order.labels}
          price={order.price}
          packages={order.packages}
          image={order.image}
          onClick={() => {}}
          id={order.id}
          key={order.id}
        >
          <div>{order.addressFirstLine}</div>
          <div>{order.addressSecondLine}</div>
        </Order>
      ))}

      <FiltersContainer onClose={() => setModalOpen(false)} isOpened={isModalOpen} />
    </Orders>
  );
};
