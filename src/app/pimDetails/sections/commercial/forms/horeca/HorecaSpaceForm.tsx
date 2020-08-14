import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField, CheckboxGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { HORECA_TYPES, HORECA_SPECIFICATIONS, WEALTH_CLASS_TYPES, LEGAL_FORM_TYPES } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const HorecaSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_horeca_title' })} ${index + 1}`}
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
                    name="horecaSpaceConfiguration.measurements.surface"
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
                    name="horecaSpaceConfiguration.measurements.salesFloorArea"
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
                    name="horecaSpaceConfiguration.measurements.amountOfFloors"
                    type="number"
                    label="pim_details.commercial_spaces.amount_floors"
                    placeholder="pim_details.commercial_spaces.amount_floors_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.measurements.amountOfRooms"
                    type="number"
                    label="pim_details.commercial_spaces.amount_rooms"
                    placeholder="pim_details.commercial_spaces.amount_rooms_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.measurements.currentNumberOfSeats"
                    type="number"
                    label="pim_details.commercial_spaces.number_of_seats"
                    placeholder="pim_details.commercial_spaces.number_of_seats_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.measurements.housingArea"
                    type="number"
                    label="pim_details.commercial_spaces.housing_area"
                    placeholder="pim_details.commercial_spaces.housing_area_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
              </Grid>

              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.horeca_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box mb={1} />
              <RadioGroupField disabled={!editing} name="horecaSpaceConfiguration.type" options={HORECA_TYPES} />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.specifications' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="horecaSpaceConfiguration.specifications"
                options={HORECA_SPECIFICATIONS}
              />
              <Box mb={1} />

              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.prices.priceInventoryGoodwill"
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
                    name="horecaSpaceConfiguration.prices.vatRate"
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
                    name="horecaSpaceConfiguration.prices.priceInventoryGoodwillVat"
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
                    name="horecaSpaceConfiguration.prices.priceInventoryGoodwillIncludedVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.inventory_goodwill_included_vat"
                    placeholder="pim_details.commercial_spaces.prices.inventory_goodwill_included_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.prices.revenueLastFiscalYear"
                    type="number"
                    label="pim_details.commercial_spaces.prices.revenue_last_year"
                    placeholder="pim_details.commercial_spaces.prices.revenue_last_year_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="horecaSpaceConfiguration.prices.rentalIncomeHomeYear"
                    type="number"
                    label="pim_details.commercial_spaces.prices.rental_income_home"
                    placeholder="pim_details.commercial_spaces.prices.rental_income_home_placeholder"
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
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box mb={1} />
              <RadioGroupField
                disabled={!editing}
                name="horecaSpaceConfiguration.wealthClass"
                options={WEALTH_CLASS_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.legal_form' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box mb={1} />
              <RadioGroupField
                disabled={!editing}
                name="horecaSpaceConfiguration.legalForm"
                options={LEGAL_FORM_TYPES}
              />
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.horeca_notes_placeholder"
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
