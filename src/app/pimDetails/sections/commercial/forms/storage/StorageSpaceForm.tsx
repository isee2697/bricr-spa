import React from 'react';
import { useForm, FormSpy } from 'react-final-form';
import { FormState } from 'final-form';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField } from 'form/fields';
import { CommercialSpaceFormProps } from '../../CommercialSpaces.types';
import { STORAGE_TYPES } from '../../dictionaries';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles, BogSpace } from 'api/types';
import { MeterIcon, SquareMeterIcon, CubicMeterIcon } from 'ui/atoms/icons';
import { useStyles } from '../CommercialSpacesForm.styles';

export const StorageSpaceForm = ({ commercialSpace, index }: CommercialSpaceFormProps) => {
  const { formatMessage } = useLocale();
  const form = useForm();
  const classes = useStyles();

  const calculateSurfaceAndVolume = ({ values, active }: FormState<BogSpace>) => {
    if (values.storageConfiguration?.measurements) {
      const { length, width, height, surface, volume } = values.storageConfiguration.measurements;

      if (active === 'storageConfiguration.measurements.surface' && surface) {
        form.change('storageConfiguration.measurements.surface', surface);
      } else if (active === 'storageConfiguration.measurements.volume' && volume) {
        form.change('storageConfiguration.measurements.volume', volume);
      } else if (
        (active === 'storageConfiguration.measurements.length' ||
          active === 'storageConfiguration.measurements.width' ||
          active === 'storageConfiguration.measurements.height') &&
        length &&
        width
      ) {
        form.change('storageConfiguration.measurements.surface', length * width);

        if (height) {
          form.change('storageConfiguration.measurements.volume', length * width * height);
        }
      }
    }
  };

  return (
    <Page
      title={`${formatMessage({ id: 'pim_details.commercial_spaces.single_storage_title' })} ${index + 1}`}
      placeholder="pim_details.commercial_spaces.description_placeholder"
      name="description"
      initialValues={{ commercialSpace }}
      updatedBy={commercialSpace.lastEditedBy}
      dateUpdated={commercialSpace.dateUpdated}
    >
      <FormSpy onChange={calculateSurfaceAndVolume} />
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
                    name="storageConfiguration.measurements.length"
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
                    name="storageConfiguration.measurements.width"
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
                    name="storageConfiguration.measurements.height"
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
                    name="storageConfiguration.measurements.surface"
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
                    name="storageConfiguration.measurements.volume"
                    type="number"
                    label="common.volume"
                    placeholder="common.volume_placeholder"
                    InputProps={{
                      endAdornment: <CubicMeterIcon />,
                    }}
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.commercial_spaces.type' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <RadioGroupField disabled={!editing} name="storageConfiguration.type" options={STORAGE_TYPES} />
              <Box mb={1} />
              <GenericField
                disabled={!editing}
                name="notes"
                label="common.notes"
                placeholder="pim_details.commercial_spaces.storage_notes_placeholder"
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.pictures' })} />
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
