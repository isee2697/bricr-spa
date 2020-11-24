import React from 'react';

import { Client } from './Client';
import { ClientContainerProps } from './Client.types';

export const ClientContainer = (props: ClientContainerProps) => {
  return <Client {...props} />;
};
