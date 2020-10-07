import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField, CheckboxGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import {
  SOCIAL_ESTATE_TYPES,
  SOCIAL_REAL_ESTATE_SERVICES,
  BOG_DESTINATION_TYPES,
  SOCIAL_REAL_ESTATE_SPECIFICATIONS,
} from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const SocialEstateForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_social_title' })} ${index + 1}`}
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
                    name="socialRealEstateSpaceConfiguration.measurements.surface"
                    type="number"
                    label="common.surface"
                    placeholder="common.surface_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="socialRealEstateSpaceConfiguration.measurements.numberOfCareUnits"
                    type="number"
                    label="pim_details.commercial_spaces.number_of_care_units"
                    placeholder="pim_details.commercial_spaces.number_of_care_units_placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="socialRealEstateSpaceConfiguration.measurements.numberOfSeats"
                    type="number"
                    label="pim_details.commercial_spaces.number_of_seats"
                    placeholder="pim_details.commercial_spaces.number_of_seats_placeholder"
                  />
                </Grid>
              </Grid>

              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.social_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <Box mb={1} />
              <RadioGroupField
                disabled={!editing}
                name="socialRealEstateSpaceConfiguration.type"
                options={SOCIAL_ESTATE_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.destination_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one__or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="socialRealEstateSpaceConfiguration.destinationType"
                options={BOG_DESTINATION_TYPES}
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
                name="socialRealEstateSpaceConfiguration.specifications"
                options={SOCIAL_REAL_ESTATE_SPECIFICATIONS}
              />
              <Box mb={1} />

              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="socialRealEstateSpaceConfiguration.prices.vatRate"
                    type="number"
                    label="pim_details.commercial_spaces.prices.vat_rate"
                    placeholder="pim_details.commercial_spaces.prices.vat_rate_placeholder"
                    InputProps={{
                      endAdornment: <PercentIcon />,
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
              <RadioGroupField
                disabled={!editing}
                name="socialRealEstateSpaceConfiguration.services"
                options={SOCIAL_REAL_ESTATE_SERVICES}
              />
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.social_notes_placeholder"
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
