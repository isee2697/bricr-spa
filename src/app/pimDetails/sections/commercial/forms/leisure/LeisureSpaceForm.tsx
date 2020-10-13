import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, UploadImageGroupField, CheckboxGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { LEISURE_SERVICES, LEISURE_SPECIFICATIONS } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, EuroIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const LeisureSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_leisure_title' })} ${index + 1}`}
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
                    name="leisureSpaceConfiguration.measurements.surface"
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
                    name="leisureSpaceConfiguration.measurements.numberOfPitches"
                    type="number"
                    label="pim_details.commercial_spaces.number_pitches"
                    placeholder="pim_details.commercial_spaces.number_pitches_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="leisureSpaceConfiguration.measurements.numberOfStays"
                    type="number"
                    label="pim_details.commercial_spaces.number_stays"
                    placeholder="pim_details.commercial_spaces.number_stays_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="leisureSpaceConfiguration.measurements.capacityOfPersons"
                    type="number"
                    label="pim_details.commercial_spaces.capacity_persons"
                    placeholder="pim_details.commercial_spaces.capacity_persons_placeholder"
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.specifications' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="leisureSpaceConfiguration.specifications"
                options={LEISURE_SPECIFICATIONS}
              />
              <Box mb={1} />

              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="leisureSpaceConfiguration.prices.priceInventoryGoodwill"
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
                    name="leisureSpaceConfiguration.prices.vatRate"
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
                    name="leisureSpaceConfiguration.prices.priceInventoryGoodwillVat"
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
                    name="leisureSpaceConfiguration.prices.priceInventoryGoodwillIncludedVat"
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
                title={formatMessage({ id: 'pim_details.commercial_spaces.services' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="leisureSpaceConfiguration.services"
                options={LEISURE_SERVICES}
              />
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.leisure_notes_placeholder"
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
