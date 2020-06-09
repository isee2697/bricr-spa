import React, { useState } from 'react';

import { Button, Typography, Grid, Box } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { PriceContainer } from './price/PriceContainer';
import { SetPricesModal } from './setPricesModal/SetPricesModal';
import { PriceType } from './Prices.types';

export const Prices = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  const [pricesTypes, setPricesTypes] = useState([] as PriceType[]);
  const [isPriceModalOpened, setPriceModalOpened] = useState(false);

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => setPriceModalOpened(true)}
            size="small"
          >
            {formatMessage({ id: 'pim_details.prices.add_price' })}
          </Button>
        }
      />

      <Grid item xs={12}>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.prices.title' })}</Typography>
        <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
          <Box mb={1}>
            <GenericField placeholder="pim_details.prices.description_placeholder" name="description" />
          </Box>
        </AutosaveForm>
        <PriceContainer types={pricesTypes} />
      </Grid>

      {isPriceModalOpened && (
        <SetPricesModal
          isOpened
          onClose={() => setPriceModalOpened(false)}
          initialValues={pricesTypes}
          onSubmit={({ prices }) => {
            setPricesTypes(prices);
            setPriceModalOpened(false);

            return Promise.resolve({ error: false });
          }}
        />
      )}
    </>
  );
};
