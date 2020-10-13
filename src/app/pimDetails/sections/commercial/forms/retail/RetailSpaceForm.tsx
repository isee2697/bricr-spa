import React from 'react';
import { Field } from 'react-final-form';
import { Radio, RadioGroup } from '@material-ui/core';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box, FormControlLabel, InputLabel } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField, CheckboxGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { AIR_TREATMENT_TYPES, RETAIL_SPECIFICATIONS, WEALTH_CLASS_TYPES, COMMON_ROOMS } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, TermsOfCostsType, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, MeterIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const RetailSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_retail_title' })} ${index + 1}`}
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
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.measurements.surface"
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
                    name="retailSpaceConfiguration.measurements.salesFloorArea"
                    type="number"
                    label="pim_details.commercial_spaces.sales_floor"
                    placeholder="pim_details.commercial_spaces.sales_floor_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.measurements.frontWidth"
                    type="number"
                    label="pim_details.commercial_spaces.front_width"
                    placeholder="pim_details.commercial_spaces.front_width_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.measurements.inUnitsFrom"
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
                    name="retailSpaceConfiguration.measurements.amountOfFloors"
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
                name="retailSpaceConfiguration.airTreatment"
                options={AIR_TREATMENT_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.specifications' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="retailSpaceConfiguration.specifications"
                options={RETAIL_SPECIFICATIONS}
              />
              <Box mb={1} />

              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.prices.priceInventoryGoodwill"
                    type="number"
                    label="pim_details.commercial_spaces.prices.inventory_goodwill"
                    placeholder="pim_details.commercial_spaces.prices.inventory_goodwill_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.prices.vatRate"
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
                    name="retailSpaceConfiguration.prices.priceInventoryGoodwillVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.inventory_goodwill_vat"
                    placeholder="pim_details.commercial_spaces.prices.inventory_goodwill_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.prices.priceInventoryGoodwillIncludedVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.inventory_goodwill_included_vat"
                    placeholder="pim_details.commercial_spaces.prices.inventory_goodwill_included_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.wealth_class' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <Box mb={1} />
              <RadioGroupField
                disabled={!editing}
                name="retailSpaceConfiguration.wealthClass"
                options={WEALTH_CLASS_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.retailers_association_contribution' })}
              />
              <Box mb={1} />
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.retailerAssociationContribution.contribution"
                    type="number"
                    label="pim_details.commercial_spaces.association_contribution"
                    placeholder="pim_details.commercial_spaces.association_contribution_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field name="retailSpaceConfiguration.retailerAssociationContribution.termsOfCosts">
                    {({ input }) => (
                      <>
                        <InputLabel disabled={!editing} variant="outlined" shrink color="primary">
                          {formatMessage({ id: `pim_details.commercial_spaces.terms_of_costs` })}
                        </InputLabel>
                        <RadioGroup
                          className={classes.radio}
                          row
                          name="retailSpaceConfiguration.retailerAssociationContribution.termsOfCosts"
                          value={input.value}
                        >
                          {Object.values(TermsOfCostsType).map(value => (
                            <FormControlLabel
                              value={value}
                              disabled={!editing}
                              control={<Radio color="default" />}
                              label={formatMessage({ id: `dictionaries.commercial.terms_type.${value}` })}
                              onClick={() => editing && input.onChange(value)}
                            />
                          ))}
                        </RadioGroup>
                      </>
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.retailerAssociationContribution.vatPercentage"
                    type="number"
                    label="pim_details.commercial_spaces.association_contribution_vat"
                    placeholder="pim_details.commercial_spaces.association_contribution_vat_placeholder"
                    InputProps={{
                      endAdornment: <PercentIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="retailSpaceConfiguration.retailerAssociationContribution.vatTaxedContribution"
                    type="number"
                    label="pim_details.commercial_spaces.association_contribution_vat_taxed"
                    placeholder="pim_details.commercial_spaces.association_contribution_vat_taxed_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}></Grid>
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
                name="retailSpaceConfiguration.commonRooms"
                options={COMMON_ROOMS}
              />
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.retail_notes_placeholder"
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
