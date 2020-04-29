import { OrderProps } from 'ui/molecules/order/Order.types';

type Order = Omit<OrderProps, 'onClick' | 'children'> & {
  addressFirstLine: string;
  addressSecondLine: string;
};

export type DashboardOrdersProps = {
  orders: Order[];
  tabs: string[];
  currentTab: number;
  onChangeTab: (tabIndex: number) => void;
};
