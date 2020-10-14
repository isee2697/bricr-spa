import React, { useState, useRef, useEffect } from 'react';

import { useLocale } from 'hooks';
import { Button, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { SetPricesModal } from 'app/shared/prices';
import { PriceSection } from 'app/shared/prices';

import { PricesGeneralProps } from './PricesGeneral.types';

const useIsInitialized = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    isInitialized.current = true;
  }, []);

  return isInitialized.current;
};

export const PricesGeneral = ({
  types,
  dateUpdated,
  updatedBy,
  onSetPrice,
  onSidebarOpen,
  isSidebarVisible,
}: PricesGeneralProps) => {
  const { formatMessage } = useLocale();
  const isInitialized = useIsInitialized();

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <ProjectDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => setModalOpened(true)}
            size="small"
          >
            {formatMessage({
              id: !types.length ? 'pim_details.prices.add_price' : 'pim_details.prices.edit_price',
            })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'pim_details.prices.title' })}
        name="description"
        placeholder="pim_details.prices.description_placeholder"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        {!types.length && (
          <Grid item xs={12}>
            <FormSection title={formatMessage({ id: 'pim_details.prices.add_new_price' })} isEditable={false}>
              <InfoSection emoji="🤑">
                <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_1' })}</Typography>
                <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_2' })}</Typography>
              </InfoSection>
            </FormSection>
          </Grid>
        )}
        {types.includes('Sale') && (
          <Grid item xs={12}>
            <PriceSection type="Sale" isInitEditing={isInitialized} />
          </Grid>
        )}
        {types.includes('Rent') && (
          <Grid item xs={12}>
            <PriceSection type="Rent" isInitEditing={isInitialized} />
          </Grid>
        )}
      </Page>
      {modalOpened && (
        <SetPricesModal
          isOpened
          onClose={() => setModalOpened(false)}
          initialValues={types}
          onSubmit={async values => {
            const result = await onSetPrice(values);

            if (!result) setModalOpened(false);

            return result;
          }}
        />
      )}
    </>
  );
};
