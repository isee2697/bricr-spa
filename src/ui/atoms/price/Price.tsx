import React from 'react';
import { FormattedNumber } from 'react-intl';

import { PriceProps } from './Price.types';

export const Price = ({ value, minimumFractionDigits, maximumFractionDigits }: PriceProps) => {
  return (
    <FormattedNumber
      minimumFractionDigits={minimumFractionDigits}
      maximumFractionDigits={maximumFractionDigits}
      value={value}
      style={`currency`}
      currency="EUR"
    />
  );
};
