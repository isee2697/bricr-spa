import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, UploadImageGroupField, CheckboxGroupField, CheckboxField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { AIR_TREATMENT_TYPES, OFFICE_SERVICES, COMMON_ROOMS } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, MeterIcon, CubicMeterIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const OfficeSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_office_title' })} ${index + 1}`}
      placeholder="pim_details.commercial_spaces.description_placeholder"
      name="description"
      initialValues={{ commercialSpace }}
      updatedBy={commercialSpace.lastEditedBy}
      dateUpdated={commercialSpace.dateUpdated}
    >
      <Grid item xs={12}>
        <FormSection title={formatMessage({ id: 'pim_details.commercial_spaces.title' })} isEditable>
          {editing => (
            <>
              <FormSubSectionHeader
                title={
                  formatMessage({ id: `dictionaries.commercial.space_type.${commercialSpace.type}` }) +
                  ` ${index + 1} | ${commercialSpace.name}`
                }
              />
              <GenericField
                disabled={!editing}
                name="name"
                label="pim_details.commercial_spaces.name"
                placeholder="pim_details.commercial_spaces.name_placeholder"
              />
              <Box mb={1} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.measurements' })} />
              <Grid container spacing={3} alignItems="center" className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.length"
                    type="number"
                    label="common.length"
                    placeholder="common.length_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.width"
                    type="number"
                    label="common.width"
                    placeholder="common.width_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.height"
                    type="number"
                    label="common.height"
                    placeholder="common.height_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.surface"
                    type="number"
                    label="common.surface"
                    placeholder="common.surface_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.volume"
                    type="number"
                    label="common.volume"
                    placeholder="common.volume_placeholder"
                    InputProps={{
                      endAdornment: <CubicMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.checkbox}>
                  <CheckboxField
                    name="officeSpaceConfiguration.measurements.measurementsCertificateAvailable"
                    label="pim_details.commercial_spaces.measurement_certificate_available"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.inUnitsFrom"
                    type="number"
                    label="pim_details.commercial_spaces.in_units_from"
                    placeholder="pim_details.commercial_spaces.in_units_from_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.measurements.amountOfFloors"
                    type="number"
                    label="pim_details.commercial_spaces.amount_floors"
                    placeholder="pim_details.commercial_spaces.amount_floors_placeholder"
                  />
                </Grid>
              </Grid>

              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.air_treatment_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="officeSpaceConfiguration.airTreatment"
                options={AIR_TREATMENT_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.services' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="officeSpaceConfiguration.services"
                options={OFFICE_SERVICES}
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.prices.price"
                    type="number"
                    label="pim_details.commercial_spaces.prices.price"
                    placeholder="pim_details.commercial_spaces.prices.price_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.prices.vatRate"
                    type="number"
                    label="pim_details.commercial_spaces.prices.vat_rate"
                    placeholder="pim_details.commercial_spaces.prices.vat_rate_placeholder"
                    InputProps={{
                      endAdornment: <PercentIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.prices.priceVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.price_vat"
                    placeholder="pim_details.commercial_spaces.prices.price_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="officeSpaceConfiguration.prices.priceIncVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.price_included_vat"
                    placeholder="pim_details.commercial_spaces.prices.price_included_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CheckboxField
                    name="officeSpaceConfiguration.turnKey"
                    label="pim_details.commercial_spaces.turnkey"
                    disabled={!editing}
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.common_rooms' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="officeSpaceConfiguration.commonRooms"
                options={COMMON_ROOMS}
              />
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.office_notes_placeholder"
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.pictures' })} />
              <Box mb={1} />
              <UploadImageGroupField
                name="images"
                entity={EntityWithFiles.BogSpace}
                entityID={commercialSpace.id}
                disabled={!editing}
                removeEntity={EntityWithMultipleFiles.BogSpace}
              />
            </>
          )}
        </FormSection>
      </Grid>
    </Page>
  );
};
