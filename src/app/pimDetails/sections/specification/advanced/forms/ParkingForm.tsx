import React from 'react';

import { Box, Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../Advanced.styles';
import * as dictionaries from '../../dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';

export const ParkingForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.advanced.parking' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <FormSubSectionHeader
              className="subtitle"
              noBorder
              title={formatMessage({ id: 'pim_details.specification.advanced.general_information' })}
            />
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <GenericField
                  name="specificationAdvanced.parking.description"
                  label="pim_details.specification.advanced.parking_description_label"
                  placeholder="pim_details.specification.advanced.parking_description_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={5}>
                <GenericField
                  name="specificationAdvanced.parking.parkingCapacity"
                  label="pim_details.specification.advanced.parking_capacity_label"
                  placeholder="pim_details.specification.advanced.parking_capacity_placeholder"
                  disabled={!editing}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.specification.advanced.parking_facilities' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <Box my={2}>
              <RadioGroupField
                disabled={!editing}
                xs={2}
                name="specificationAdvanced.parking.parkingFacilities"
                options={dictionaries.parking}
              />
            </Box>
          </>
        )}
      </FormSection>
    </div>
  );
};
