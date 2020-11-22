import React from 'react';

import { BrokerageContainerProps } from './Brokerage.types';
import { Brokerage } from './Brokerage';

export const BrokerageContainer = (props: BrokerageContainerProps) => {
  return <Brokerage {...props} />;
};
