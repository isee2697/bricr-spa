export type Broker = {
  avatar: string;
  name: string;
  id: string;
};

export type DmsDashboardBoardsBrokersProps = {
  brokers: Broker[];
};

export type DmsDashboardBoardsBrokerItemProps = {
  broker: Broker;
};
