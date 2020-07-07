import React, { useEffect, useRef } from 'react';

import { Typography, Grid } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

import { PriceProps } from './Price.types';
import { Sale } from './sections/Sale';
import { Rent } from './sections/Rent';

const useIsInitialized = () => {
  const isInitialized = useRef(false);
  useEffect(() => {
    isInitialized.current = true;
  }, []);

  return isInitialized.current;
};

export const Price = ({ types }: PriceProps) => {
  const { formatMessage } = useLocale();
  const isInitialized = useIsInitialized();

  if (!types.length)
    return (
      <Grid item xs={12}>
        <FormSection title={formatMessage({ id: 'pim_details.prices.add_new_price' })} isEditable={false}>
          <InfoSection emoji="🤑">
            <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_1' })}</Typography>
            <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_2' })}</Typography>
          </InfoSection>
        </FormSection>
      </Grid>
    );

  return (
    <>
      {types.includes('Sale') && (
        <Grid item xs={12}>
          <Sale isInitExpanded={isInitialized} />
        </Grid>
      )}
      {types.includes('Rent') && (
        <Grid item xs={12}>
          <Rent isInitExpanded={isInitialized} />
        </Grid>
      )}
    </>
  );
};
