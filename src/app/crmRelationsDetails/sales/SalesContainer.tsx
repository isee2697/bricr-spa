import React from 'react';

import { Sales } from './Sales';
import { SalesContainerProps } from './Sales.types';

export const SalesContainer = (props: SalesContainerProps) => {
  return <Sales {...props} />;
};
