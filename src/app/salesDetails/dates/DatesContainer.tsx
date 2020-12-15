import React from 'react';

import { DatesContainerProps } from './Dates.types';
import { Dates } from './Dates';

export const DatesContainer = (props: DatesContainerProps) => {
  return <Dates {...props} />;
};
