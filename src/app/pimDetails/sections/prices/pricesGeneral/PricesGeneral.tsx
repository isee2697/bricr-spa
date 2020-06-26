import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { PricesGeneralProps, PriceType } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';
import { PriceContainer } from 'app/pimDetails/sections/prices/price/PriceContainer';
import { SetPricesModal } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal';
import { Page } from 'ui/templates';

export const PricesGeneral = ({
  title,
  isSidebarVisible,
  onOpenSidebar,
  onSave,
  rent,
  sale,
  updatedBy,
  dateUpdated,
}: PricesGeneralProps) => {
  const { id } = useParams<{ id: string }>();
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

      <Page
        onSave={() => Promise.resolve({ error: false })}
        title={formatMessage({ id: 'pim_details.prices.title' })}
        placeholder="pim_details.prices.description_placeholder"
        name="description"
        updatedBy={updatedBy}
        dateUpdated={dateUpdated}
      >
        <PriceContainer types={pricesTypes} rent={rent} sale={sale} pimId={id} />
      </Page>

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
