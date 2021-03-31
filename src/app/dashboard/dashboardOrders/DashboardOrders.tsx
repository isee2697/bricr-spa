import React from 'react';
import { useHistory } from 'react-router-dom';

import { SalesLabel } from 'api/types';
import { ActionTabs, Order } from 'ui/molecules';
import { Orders } from 'ui/organisms';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { useLocale, useModalDispatch } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddSalesLeadModalContainer } from 'app/sales/addSalesLeadModal/AddSalesLeadModalContainer';

import { DashboardOrdersProps } from './DashboardOrders.types';

export const DashboardOrders = ({ orders, currentTab, onChangeTab }: DashboardOrdersProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { open } = useModalDispatch();

  const tabs: ActionTab[] = [
    {
      value: SalesLabel.Acquisition,
      label: formatMessage({ id: `dictionaries.sales_label.${SalesLabel.Acquisition}` }),
    },
    {
      value: SalesLabel.Lead,
      label: formatMessage({ id: `dictionaries.sales_label.${SalesLabel.Lead}` }),
    },
    {
      value: SalesLabel.Order,
      label: formatMessage({ id: `dictionaries.sales_label.${SalesLabel.Order}` }),
    },
    {
      value: SalesLabel.Quotation,
      label: formatMessage({ id: `dictionaries.sales_label.${SalesLabel.Quotation}` }),
    },
  ];

  const handleOpenAddModal = () => {
    switch (currentTab) {
      case SalesLabel.Lead:
        open('add-sales-lead');
        break;
      case SalesLabel.Acquisition:
        open('add-sales-item', { salesLabel: SalesLabel.Acquisition });
        break;
      case SalesLabel.Order:
        open('add-sales-item', { salesLabel: SalesLabel.Order });
        break;
      case SalesLabel.Quotation:
        open('add-sales-item', { salesLabel: SalesLabel.Quotation });
        break;
      default:
        open('add-sales-lead');
    }
  };

  return (
    <>
      <Orders
        onAddClick={() => {
          handleOpenAddModal();
        }}
        onMoreClick={() => {
          push(AppRoute.sales);
        }}
        onManageClick={() => {}}
        tabs={<ActionTabs status={currentTab} onStatusChange={onChangeTab} tabs={tabs} />}
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
      </Orders>
      <AddSalesLeadModalContainer />
    </>
  );
};
