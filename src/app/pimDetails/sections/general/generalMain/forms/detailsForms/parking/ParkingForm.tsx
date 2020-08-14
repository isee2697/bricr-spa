import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { useForm, FormSpy } from 'react-final-form';
import { FormState } from 'final-form';

import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { FormSubSectionHeader } from 'ui/molecules';
import { RadioGroupField, GenericField } from 'form/fields';
import { MeterIcon, SquareMeterIcon, CubicMeterIcon } from 'ui/atoms/icons';
import { PimGeneralInput } from 'api/types';
import { DetailsFormProps } from '../DetailsForm.types';
import { PARKING_TYPES, PARKING_SPECIFICATIONS, PARKING_INSULATION, PARKING_MATERIALS } from '../dictionaries';

export const ParkingForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const form = useForm();

  return (
    <>
      <FormSpy
        onChange={({ values, active }: FormState<PimGeneralInput>) => {
          if (values.parkingGeneral?.measurements) {
            const { width, height, surface, length, volume } = values.parkingGeneral?.measurements;
            const isActiveLengthWidthHeight =
              active === 'parkingGeneral.measurements.length' ||
              active === 'parkingGeneral.measurements.width' ||
              active === 'parkingGeneral.measurements.height';

            if (active === 'parkingGeneral.measurements.surface') {
              form.change('parkingGeneral.measurements.surface', surface);
            } else if (active === 'parkingGeneral.measurements.volume') {
              form.change('parkingGeneral.measurements.volume', volume);
            } else if (isActiveLengthWidthHeight && width && length) {
              form.change('parkingGeneral.measurements.surface', width * length);

              if (height) {
                form.change('parkingGeneral.measurements.volume', width * length * height);
              }
            }
          }
        }}
      />
      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.parking.parking_type' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
      />
      <Grid container spacing={1} className={classes.tilesContainer}>
        <RadioGroupField options={PARKING_TYPES} name="parkingGeneral.type.type" disabled={!editing} />
      </Grid>
      <Box mb={2} />
      <GenericField
        name="parkingGeneral.type.parkingNumber"
        type="number"
        label="pim_details.parking.parking_number"
        placeholder="pim_details.parking.parking_number_placeholder"
        disabled={!editing}
      />
      <GenericField
        name="parkingGeneral.type.notes"
        label="pim_details.parking.parking_type_notes"
        placeholder="pim_details.parking.parking_type_notes_placeholder"
        disabled={!editing}
      />

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.parking.measurements' })}
      />
      <Box mb={2} />
      <Grid className={classes.textFields} container spacing={3}>
        <Grid item xs={6}>
          <GenericField
            type="number"
            name="parkingGeneral.measurements.length"
            label="pim_details.parking.length"
            placeholder="pim_details.parking.length_placeholder"
            disabled={!editing}
            InputProps={{
              endAdornment: <MeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            type="number"
            name="parkingGeneral.measurements.width"
            label="pim_details.parking.width"
            placeholder="pim_details.parking.width_placeholder"
            disabled={!editing}
            InputProps={{
              endAdornment: <MeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            type="number"
            name="parkingGeneral.measurements.surface"
            label="pim_details.parking.surface"
            placeholder="pim_details.parking.surface_placeholder"
            disabled={!editing}
            InputProps={{
              endAdornment: <SquareMeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            type="number"
            name="parkingGeneral.measurements.capacity"
            label="pim_details.parking.capacity"
            placeholder="pim_details.parking.capacity_placeholder"
            disabled={!editing}
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            name="parkingGeneral.measurements.height"
            type="number"
            label="pim_details.parking.height"
            placeholder="pim_details.parking.height_placeholder"
            disabled={!editing}
            InputProps={{
              endAdornment: <MeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            name="parkingGeneral.measurements.volume"
            type="number"
            label="pim_details.parking.volume"
            placeholder="pim_details.parking.volume_placeholder"
            disabled={!editing}
            InputProps={{
              endAdornment: <CubicMeterIcon />,
            }}
          />
        </Grid>
      </Grid>
      <Box mb={2} />
      <FormSubSectionHeader
        title={formatMessage({ id: 'pim_details.parking.specifications' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <Box mb={2} paddingTop={2} paddingLeft={2}>
        <RadioGroupField
          disabled={!editing}
          name="parkingGeneral.specifications.type"
          options={PARKING_SPECIFICATIONS}
        />
      </Box>
      <Grid className={classes.textFields} container spacing={3}>
        <Grid item xs={12}>
          <GenericField
            name="parkingGeneral.specifications.notes"
            label="pim_details.parking.specifications_notes"
            placeholder="pim_details.parking.specifications_notes_placeholder"
            disabled={!editing}
          />
        </Grid>
      </Grid>
      <Box mb={2} />
      <FormSubSectionHeader
        noBorder
        title={formatMessage({ id: 'pim_details.parking.material' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <Box paddingTop={2} paddingLeft={2}>
        <RadioGroupField disabled={!editing} name="parkingGeneral.material.type" options={PARKING_MATERIALS} />
      </Box>

      <Grid item xs={12}>
        <GenericField
          name="parkingGeneral.material.notes"
          label="pim_details.parking.material_notes"
          placeholder="pim_details.parking.material_notes_placeholder"
          disabled={!editing}
        />
      </Grid>
      <Box mb={2} />
      <FormSubSectionHeader
        title={formatMessage({ id: 'pim_details.parking.insulation' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
      />
      <Box mb={2} />
      <RadioGroupField disabled={!editing} name="parkingGeneral.insulation.type" options={PARKING_INSULATION} />
      <Grid item xs={12}>
        <GenericField
          name="parkingGeneral.insulation.notes"
          label="pim_details.parking.insulation_notes"
          placeholder="pim_details.parking.insulation_notes_placeholder"
          disabled={!editing}
        />
      </Grid>
    </>
  );
};
