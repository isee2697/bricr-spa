export type SalesBroker = {
  avatar: string;
  name: string;
  email: string;
  id: string;
};

export type SalesBrokersProps = {
  salesBrokers: SalesBroker[];
};

export type SalesBrokerItemProps = {
  salesBroker: SalesBroker;
};
