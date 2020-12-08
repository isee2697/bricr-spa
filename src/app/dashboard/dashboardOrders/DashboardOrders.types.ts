import { SalesLabel } from 'api/types';
import { OrderProps } from 'ui/molecules/order/Order.types';

type Order = Omit<OrderProps, 'onClick' | 'children'> & {
  addressFirstLine: string;
  addressSecondLine: string;
};

export type DashboardOrdersProps = {
  orders: Order[];
  currentTab: SalesLabel;
  onChangeTab: (tabIndex: SalesLabel) => void;
};
