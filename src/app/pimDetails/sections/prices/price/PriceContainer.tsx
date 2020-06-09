import React from 'react';

import { AutosaveForm } from 'ui/organisms';

import { PriceProps } from './Price.types';
import { Price } from './Price';

export const PriceContainer = ({ types }: PriceProps) => {
  const handleSave = () => Promise.resolve({ error: false });

  return (
    <AutosaveForm onSave={handleSave}>
      <Price types={types} />
    </AutosaveForm>
  );
};
