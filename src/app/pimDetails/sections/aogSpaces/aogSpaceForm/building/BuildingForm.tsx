import React from 'react';
import { FormSpy, useForm } from 'react-final-form';
import { FormState } from 'final-form';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField } from 'form/fields';
import { Page } from 'ui/templates';
import { AogSpace, EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { MeterIcon, SquareMeterIcon, CubicMeterIcon } from 'ui/atoms/icons';
import { BUILDING_TYPES } from '../dictionaries';
import { AogTypeSpecificFormProps } from '../AogSpaceForm.types';
import { AogSpaceDescriptionContainer } from '../../aogSpaceDescription/AogSpaceDescriptionContainer';

export const BuildingsForm = ({ data }: AogTypeSpecificFormProps) => {
  const { formatMessage } = useLocale();
  const form = useForm();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.buildings.title' })}
      updatedBy={data.lastEditedBy}
      dateUpdated={data.dateUpdated}
    >
      <AogSpaceDescriptionContainer type={data.type} />
      <Grid item xs={12}>
        <FormSection title={`${formatMessage({ id: `pim_details.buildings.single_title` })} - ${data.name}`} isEditable>
          {editing => (
            <>
              <FormSpy
                onChange={({ values, active }: FormState<AogSpace>) => {
                  if (values?.buildingsConfiguration?.measurements) {
                    const { length, width, surface } = values.buildingsConfiguration.measurements;
                    const isActiveLengthWidth =
                      active === 'buildingsConfiguration.measurements.length' ||
                      active === 'buildingsConfiguration.measurements.width';

                    if (active === 'buildingsConfiguration.measurements.surface' && surface) {
                      form.change('buildingsConfiguration.measurements.surface', surface);
                    } else if (isActiveLengthWidth && length && width) {
                      form.change('buildingsConfiguration.measurements.surface', length * width);
                    }
                  }
                }}
              />
              <GenericField
                disabled={!editing}
                name="name"
                label="pim_details.buildings.name"
                placeholder="pim_details.buildings.name_placeholder"
              />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.buildings.type' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <RadioGroupField
                disabled={!editing}
                name="buildingsConfiguration.buildingType"
                options={BUILDING_TYPES}
              />
              <GenericField
                type="number"
                disabled={!editing}
                name="buildingsConfiguration.numberOfSameBuilding"
                label="pim_details.buildings.number"
                placeholder="pim_details.buildings.number_placeholder"
              />
              <GenericField
                disabled={!editing}
                name="buildingsConfiguration.buildingTypeNotes"
                label="pim_details.buildings.notes"
                placeholder="pim_details.buildings.notes_placeholder"
              />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.measurements' })} />

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.length"
                    label="pim_details.buildings.length"
                    placeholder="pim_details.buildings.length_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.width"
                    label="pim_details.buildings.width"
                    placeholder="pim_details.buildings.width_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.surface"
                    label="pim_details.buildings.surface"
                    placeholder="pim_details.buildings.surface_placeholder"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.height"
                    label="pim_details.buildings.height"
                    placeholder="pim_details.buildings.height_placeholder"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.volume"
                    label="pim_details.buildings.volume"
                    placeholder="pim_details.buildings.volume_placeholder"
                    InputProps={{
                      endAdornment: <CubicMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericField
                    type="number"
                    disabled={!editing}
                    name="buildingsConfiguration.measurements.constructionYear"
                    label="pim_details.buildings.construction_year"
                    placeholder="pim_details.buildings.construction_year_placeholder"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.pictures' })} />
                <UploadImageGroupField
                  name="images"
                  entity={EntityWithFiles.AogSpace}
                  entityID={data.id}
                  disabled={!editing}
                  removeEntity={EntityWithMultipleFiles.AogSpace}
                />
              </Grid>
            </>
          )}
        </FormSection>
      </Grid>
    </Page>
  );
};
