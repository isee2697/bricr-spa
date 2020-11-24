import React from 'react';

import { LinkedBusinesses } from './LinkedBusinesses';
import { LinkedBusinessesContainerProps } from './LinkedBusinesses.types';

export const LinkedBusinessesContainer = (props: LinkedBusinessesContainerProps) => {
  return <LinkedBusinesses {...props} />;
};
