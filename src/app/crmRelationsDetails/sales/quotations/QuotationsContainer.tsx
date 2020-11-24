import React from 'react';

import { QuotationsContainerProps } from './Quotations.types';
import { Quotations } from './Quotations';

export const QuotationsContainer = (props: QuotationsContainerProps) => {
  return <Quotations {...props} />;
};
