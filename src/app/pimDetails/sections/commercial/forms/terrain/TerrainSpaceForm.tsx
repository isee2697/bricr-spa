import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, UploadImageGroupField, CheckboxGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { TERRAIN_SPECIFICATIONS, PAVEMENT_TYPES } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { SquareMeterIcon, EuroIcon, MeterIcon, PercentIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const TerrainSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_title' })} ${index + 1}`}
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
                    name="terrainConfiguration.terrainSpecifications.surface"
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
                    name="terrainConfiguration.terrainSpecifications.buildingHeightTerrain"
                    type="number"
                    label="pim_details.commercial_spaces.building_height"
                    placeholder="pim_details.commercial_spaces.building_height_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="terrainConfiguration.terrainSpecifications.extensionTerrainPercent"
                    type="number"
                    label="pim_details.commercial_spaces.extension_percent"
                    placeholder="pim_details.commercial_spaces.extension_percent_placeholder"
                    InputProps={{
                      endAdornment: <PercentIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="terrainConfiguration.terrainSpecifications.extensionTerrainM2"
                    type="number"
                    label="pim_details.commercial_spaces.extension_surface"
                    placeholder="pim_details.commercial_spaces.extension_surface_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="terrainConfiguration.terrainSpecifications.pavedPercentage"
                    type="number"
                    label="pim_details.commercial_spaces.paved_percent"
                    placeholder="pim_details.commercial_spaces.paved_percent_placeholder"
                    InputProps={{
                      endAdornment: <PercentIcon />,
                    }}
                  />
                </Grid>
              </Grid>

              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'common.specifications' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="terrainConfiguration.specifications"
                options={TERRAIN_SPECIFICATIONS}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.pavement_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <Box mb={1} />
              <CheckboxGroupField
                disabled={!editing}
                name="terrainConfiguration.typeOfPavement"
                options={PAVEMENT_TYPES}
              />
              <Box mb={1} />

              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.prices' })} />
              <Grid container spacing={3} className={classes.fields}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    disabled={!editing}
                    name="terrainConfiguration.prices.price"
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
                    name="terrainConfiguration.prices.vatRate"
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
                    name="terrainConfiguration.prices.priceVat"
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
                    name="terrainConfiguration.prices.priceIncVat"
                    type="number"
                    label="pim_details.commercial_spaces.prices.price_included_vat"
                    placeholder="pim_details.commercial_spaces.prices.price_included_vat_placeholder"
                    InputProps={{
                      startAdornment: <EuroIcon />,
                    }}
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.terrain_notes_placeholder"
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.pictures' })} />
              <Box mb={1} />
              <UploadImageGroupField
                name="pictures"
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
