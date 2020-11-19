export type Broker = {
  avatar: string;
  name: string;
  id: string;
};

export type BrokersProps = {
  brokers: Broker[];
};

export type BrokerItemProps = {
  broker: Broker;
};
