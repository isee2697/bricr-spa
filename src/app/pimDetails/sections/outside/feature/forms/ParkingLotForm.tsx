import React from 'react';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { useLocale } from 'hooks';
import { GenericField, UploadImageGroupField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FeatureFormProps } from '../Feature.types';

export const ParkingLotForm = ({ id, inEditMode }: FeatureFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={4}>
        <Box mb={1}>
          <FormSubSectionHeader title={formatMessage({ id: 'pim_details.outside.main.general_info' })} />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <GenericField
              name="configuration.number"
              label="pim_details.outside.parkinglot.number"
              type="number"
              disabled={!inEditMode}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="configuration.price"
              label="pim_details.outside.parkinglot.price"
              type="number"
              disabled={!inEditMode}
            />
          </Grid>
          <Grid item xs={4}>
            <GenericField
              name="configuration.cost"
              label="pim_details.outside.parkinglot.service_cost"
              type="number"
              disabled={!inEditMode}
            />
          </Grid>
        </Grid>
        <GenericField
          name="configuration.notes"
          label="common.notes"
          placeholder="pim_details.outside.garden.notes_placeholder"
          disabled={!inEditMode}
        />
      </Box>

      <Box mb={2.25}>
        <FormSubSectionHeader
          title={formatMessage({ id: 'common.pictures' })}
          subtitle={formatMessage({ id: 'pim_details.choose_picture' })}
        />
      </Box>
      <UploadImageGroupField
        entity={EntityWithFiles.OutsideFeature}
        entityID={id}
        name="configuration.images"
        disabled={!inEditMode}
        removeEntity={EntityWithMultipleFiles.OutsideFeature}
      />
    </>
  );
};
