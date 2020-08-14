import React from 'react';
import { useForm, FormSpy } from 'react-final-form';
import { FormState } from 'final-form';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { SquareMeterIcon, MeterIcon } from 'ui/atoms/icons';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { CheckboxField, GenericField, CardField, CheckboxGroupField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { PimGeneral } from 'api/types';
import { DetailsFormProps } from '../DetailsForm.types';
import { SOIL_TYPES } from '../dictionaries';

export const BuildingPlotPropertyDetailsForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const form = useForm();

  return (
    <>
      <FormSpy
        onChange={({ values, active }: FormState<PimGeneral>) => {
          if (values.buildingPlotGeneral?.propertyDetails?.measurements) {
            const { length, width, surface } = values.buildingPlotGeneral?.propertyDetails?.measurements;
            const isActiveWithOrLength =
              active === 'buildingPlotGeneral.propertyDetails.measurements.length' ||
              active === 'buildingPlotGeneral.propertyDetails.measurements.width';

            if (active === 'buildingPlotGeneral.propertyDetails.measurements.surface' && surface) {
              form.change('buildingPlotGeneral.propertyDetails.measurements.surface', surface);
            } else if (isActiveWithOrLength && width && length) {
              form.change('buildingPlotGeneral.propertyDetails.measurements.surface', length * width);
            }
          }
        }}
      />
      <Grid alignItems="center" container>
        <CheckboxField
          label="pim_details.building_plot.is_ready_for_construction"
          name="buildingPlotGeneral.propertyDetails.plotReadyForConstruction"
          disabled={!editing}
        />
        <Grid item className={classes.alignRight} xs={6}>
          <GenericField
            name="buildingPlotGeneral.propertyDetails.buildingPlotNumber"
            label="pim_details.building_plot.plot_number"
            placeholder="pim_details.building_plot.plot_number_placeholder"
            disabled={!editing}
          />
        </Grid>
      </Grid>

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.building_plot.soil_types' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <CheckboxGroupField
          disabled={!editing}
          xs={2}
          name="buildingPlotGeneral.propertyDetails.soilType"
          options={SOIL_TYPES}
        />
      </div>
      <Box mb={2}>
        <GenericField
          name="buildingPlotGeneral.propertyDetails.notes"
          label="common.notes"
          placeholder="pim_details.building_plot.notes_placeholder"
          disabled={!editing}
        />
      </Box>
      <Box mb={3}>
        <FormSubSectionHeader title={formatMessage({ id: 'pim_details.building_plot.measurement.title' })} />

        <Grid container>
          <Grid item xs={12} md={4}>
            <GenericField
              name="buildingPlotGeneral.propertyDetails.measurements.length"
              label="pim_details.building_plot.measurement.length"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!editing}
            />
            <GenericField
              name="buildingPlotGeneral.propertyDetails.measurements.width"
              label="pim_details.building_plot.measurement.width"
              type="number"
              size="medium"
              InputProps={{
                endAdornment: <MeterIcon />,
              }}
              disabled={!editing}
            />
          </Grid>
          <Grid item md={2} />
          <Grid item xs={12} md={6}>
            <CardField
              name="buildingPlotGeneral.propertyDetails.measurements.surface"
              label="pim_details.building_plot.measurement.surface"
              InputProps={{
                endAdornment: <SquareMeterIcon />,
              }}
              type="number"
              disabled={!editing}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
