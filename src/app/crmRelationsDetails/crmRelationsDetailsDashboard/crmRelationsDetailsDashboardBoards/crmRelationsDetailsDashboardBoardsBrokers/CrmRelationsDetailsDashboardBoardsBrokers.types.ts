export type Broker = {
  avatar: string;
  name: string;
  id: string;
};

export type CrmRelationsDetailsDashboardBoardsBrokersProps = {
  brokers: Broker[];
};

export type CrmRelationsDetailsDashboardBoardsBrokerItemProps = {
  broker: Broker;
};
