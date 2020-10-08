import React from 'react';
import { useForm, FormSpy } from 'react-final-form';
import { FormState } from 'final-form';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import {
  GenericField,
  RadioGroupField,
  CheckboxGroupField,
  CheckboxButtonField,
  UploadImageGroupField,
} from 'form/fields';
import { Page } from 'ui/templates';
import { SquareMeterIcon, GraphIcon, MeterIcon } from 'ui/atoms/icons';
import { AogSpace, AogSpecificationsType, EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { GROUND_TYPES, SOIL_TYPES, CULTIVATION_TYPES, FENCE_TYPES } from '../dictionaries';
import { AogTypeSpecificFormProps } from '../AogSpaceForm.types';
import { AogSpaceDescriptionContainer } from '../../aogSpaceDescription/AogSpaceDescriptionContainer';

export const GroundsForm = ({ data }: AogTypeSpecificFormProps) => {
  const { formatMessage } = useLocale();
  const form = useForm();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.ground.title' })}
      updatedBy={data.lastEditedBy}
      dateUpdated={data.dateUpdated}
    >
      <AogSpaceDescriptionContainer type={data.type} />
      <Grid item xs={12}>
        <FormSection title={`${formatMessage({ id: 'pim_details.ground.single_title' })} - ${data.name}`} isEditable>
          {editing => (
            <>
              <GenericField
                disabled={!editing}
                name="name"
                label="pim_details.ground.name"
                placeholder="pim_details.ground.name_placeholder"
              />
              <Box mb={1} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.ground.type' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <RadioGroupField
                disabled={!editing}
                name="groundConfiguration.typeOfLooseGround"
                options={GROUND_TYPES}
              />
              <Box mb={3} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.ground.soil_types' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
              <CheckboxGroupField options={SOIL_TYPES} name="groundConfiguration.soilType" disabled={!editing} />
              <GenericField
                disabled={!editing}
                name="groundConfiguration.soilTypeNotes"
                placeholder="pim_details.ground.notes_placeholder"
                label="common.notes"
              />

              <FormSpy
                onChange={({ values, active }: FormState<AogSpace>) => {
                  if (values?.groundConfiguration?.measurements) {
                    const { length, width, surface } = values.groundConfiguration.measurements;
                    const isActiveLengthWidth =
                      active === 'groundConfiguration.measurements.length' ||
                      active === 'groundConfiguration.measurements.width';

                    if (active === 'groundConfiguration.measurements.surface' && surface) {
                      form.change('groundConfiguration.measurements.surface', surface);
                    } else if (isActiveLengthWidth && length && width) {
                      form.change('groundConfiguration.measurements.surface', length * width);
                    }
                  }

                  if (active === 'groundConfiguration.specifications[0].type') {
                    form.change(
                      'groundConfiguration.specifications[0].type',
                      values?.groundConfiguration?.specifications?.[0].type
                        ? AogSpecificationsType.Drainage
                        : undefined,
                    );
                  }

                  if (active === 'groundConfiguration.specifications[1].type') {
                    form.change(
                      'groundConfiguration.specifications[1].type',
                      values?.groundConfiguration?.specifications?.[1].type
                        ? AogSpecificationsType.ProductionRights
                        : undefined,
                    );
                  }
                }}
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.measurements' })} />
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.length"
                    label="common.length"
                    placeholder="common.length_placeholder"
                    disabled={!editing}
                    type="number"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.width"
                    label="common.width"
                    placeholder="common.width_placeholder"
                    disabled={!editing}
                    type="number"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.surface"
                    label="common.surface"
                    placeholder="common.surface_placeholder"
                    disabled={!editing}
                    type="number"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.fullBuiltWidth"
                    label="pim_details.ground.built_up_width"
                    placeholder="common.surface_placeholder"
                    disabled={!editing}
                    type="number"
                    InputProps={{
                      endAdornment: <MeterIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.currentNumberOfSeats"
                    label="pim_details.ground.seats"
                    placeholder="pim_details.ground.seats_placeholder"
                    disabled={!editing}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericField
                    name="groundConfiguration.measurements.housingArea"
                    label="pim_details.ground.housing_area"
                    placeholder="pim_details.ground.housing_area_placeholder"
                    disabled={!editing}
                    type="number"
                    InputProps={{
                      endAdornment: <SquareMeterIcon />,
                    }}
                  />
                </Grid>
              </Grid>
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.specifications' })} />
              <Grid container spacing={3}>
                <Grid item xs={4} md={2}>
                  <CheckboxButtonField
                    xs={12}
                    name="groundConfiguration.specifications[0].type"
                    option={{
                      label: 'pim_details.ground.drainage',
                      icon: <GraphIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={8} md={10}>
                  <GenericField
                    name="groundConfiguration.specifications[0].notes"
                    label="common.notes"
                    placeholder="pim_details.ground.drainage_placeholder"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={4} md={2}>
                  <CheckboxButtonField
                    xs={12}
                    name="groundConfiguration.specifications[1].type"
                    option={{
                      label: 'pim_details.ground.production_rights',
                      icon: <GraphIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={8} md={10}>
                  <GenericField
                    name="groundConfiguration.specifications[1].notes"
                    label="common.notes"
                    placeholder="pim_details.ground.production_rights_placeholder"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.ground.cultivation_types' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                  />
                  <CheckboxGroupField
                    options={CULTIVATION_TYPES}
                    name="groundConfiguration.cultivationTypes"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.ground.fence_types' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                  />
                  <CheckboxGroupField options={FENCE_TYPES} name="groundConfiguration.fenceTypes" disabled={!editing} />
                </Grid>
                <Box mb={3} />

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
              </Grid>
            </>
          )}
        </FormSection>
      </Grid>
    </Page>
  );
};
