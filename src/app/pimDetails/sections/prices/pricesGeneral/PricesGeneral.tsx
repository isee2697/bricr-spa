import React, { useState } from 'react';

import { Box, Button, Grid, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { PricesGeneralProps, PriceType } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';
import { PriceContainer } from 'app/pimDetails/sections/prices/price/PriceContainer';
import { SetPricesModal } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal';

export const PricesGeneral = ({
  title,
  isSidebarVisible,
  onOpenSidebar,
  onSave,
  rent,
  sale,
  pim,
}: PricesGeneralProps) => {
  const { formatMessage } = useLocale();
  const [isPriceModalOpened, setPriceModalOpened] = useState(false);

  const pricesTypes = [rent?.isEnabled && 'Rent', sale?.isEnabled && 'Sale'].filter(Boolean) as PriceType[];

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
            {formatMessage({
              id: !pricesTypes.length ? 'pim_details.prices.add_price' : 'pim_details.prices.edit_price',
            })}
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
        <PriceContainer types={pricesTypes} rent={rent} sale={sale} pimId={pim?.id} />
      </Grid>

      {isPriceModalOpened && (
        <SetPricesModal
          isOpened
          onClose={() => setPriceModalOpened(false)}
          initialValues={pricesTypes}
          onSubmit={async values => {
            const result = await onSave(values);

            if (!result) setPriceModalOpened(false);

            return result;
          }}
        />
      )}
    </>
  );
};
