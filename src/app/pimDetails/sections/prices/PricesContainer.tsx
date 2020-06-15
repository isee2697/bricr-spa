import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimPricingQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Prices } from 'app/pimDetails/sections/prices/Prices';

export const PricesContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimPricingQuery({ variables: { id } });

  if (data) return <Prices {...props} pricing={data.getPricing} />;

  return null;
};
