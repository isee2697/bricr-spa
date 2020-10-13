import React from 'react';
import { useForm } from 'react-final-form';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, CheckboxButtonField, UploadImageGroupField } from 'form/fields';
import { Page } from 'ui/templates';
import { GraphIcon } from 'ui/atoms/icons';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { AogSpaceDescriptionContainer } from '../../aogSpaceDescription/AogSpaceDescriptionContainer';
import { ANIMAL_TYPES } from '../dictionaries';
import { AogTypeSpecificFormProps } from '../AogSpaceForm.types';

export const AnimalsForm = ({ data }: AogTypeSpecificFormProps) => {
  const { formatMessage } = useLocale();
  const form = useForm();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.animals.title' })}
      placeholder="pim_details.animals.description_placeholder"
      updatedBy={data.lastEditedBy}
      dateUpdated={data.dateUpdated}
    >
      <AogSpaceDescriptionContainer type={data.type} />
      <Grid item xs={12}>
        <FormSection title={`${formatMessage({ id: `pim_details.animals.single_title` })} - ${data.name}`} isEditable>
          {editing => (
            <>
              <GenericField
                disabled={!editing}
                name="name"
                label="pim_details.animals.name"
                placeholder="pim_details.animals.name_placeholder"
              />
              <Box mb={1} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.animals.type' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <RadioGroupField sm={2} disabled={!editing} name="animalsConfiguration.type" options={ANIMAL_TYPES} />
              <Box mb={3} />
              <Grid item md={6}>
                <GenericField
                  disabled={!editing}
                  name="animalsConfiguration.numberOfSameAnimals"
                  placeholder="pim_details.animals.amount_of_type_placeholder"
                  label="pim_details.animals.amount_of_type"
                  type="number"
                />
              </Grid>

              <GenericField
                disabled={!editing}
                name="animalsConfiguration.notes"
                placeholder="pim_details.animals.notes_placeholder"
                label="common.notes"
              />
              <Box mb={3} />
              <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.specifications' })} />
              <Grid container spacing={3}>
                <Grid item xs={4} md={2}>
                  <CheckboxButtonField
                    xs={12}
                    name="animalsConfiguration.specifications[0].type"
                    onChange={selected => {
                      if (editing) {
                        form.change(
                          'animalsConfiguration.specifications[0].type',
                          selected ? 'PoultryRights' : undefined,
                        );
                      }
                    }}
                    option={{
                      label: 'pim_details.animals.poultry_rights',
                      icon: <GraphIcon />,
                    }}
                  />
                </Grid>

                <Grid item xs={8} md={10}>
                  <GenericField
                    name="animalsConfiguration.specifications[0].notes"
                    label="common.notes"
                    placeholder="pim_details.animals.poultry_rights_notes_placeholder"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={4} md={2}>
                  <CheckboxButtonField
                    xs={12}
                    onChange={selected => {
                      if (editing) {
                        form.change('animalsConfiguration.specifications[1].type', selected ? 'PigRights' : undefined);
                      }
                    }}
                    name="animalsConfiguration.specifications[1].type"
                    option={{
                      label: 'pim_details.animals.pig_rights',
                      icon: <GraphIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={8} md={10}>
                  <GenericField
                    name="animalsConfiguration.specifications[1].notes"
                    label="common.notes"
                    placeholder="pim_details.animals.pig_rights_notes_placeholder"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={4} md={2}>
                  <CheckboxButtonField
                    xs={12}
                    name="animalsConfiguration.specifications[2].type"
                    onChange={selected => {
                      if (editing) {
                        form.change('animalsConfiguration.specifications[2].type', selected ? 'GreenLabel' : undefined);
                      }
                    }}
                    option={{
                      label: 'pim_details.animals.green_label',
                      icon: <GraphIcon />,
                    }}
                  />
                </Grid>
                <Grid item xs={8} md={10}>
                  <GenericField
                    name="animalsConfiguration.specifications[2].notes"
                    label="common.notes"
                    placeholder="pim_details.animals.green_label_notes_placeholder"
                    disabled={!editing}
                  />
                </Grid>
                <Box mb={3} />

                <Grid item xs={12}>
                  <FormSubSectionHeader noBorder title={formatMessage({ id: 'common.pictures' })} />
                  <UploadImageGroupField
                    name="images"
                    entity={EntityWithFiles.AogSpace}
                    entityID={data.id}
                    removeEntity={EntityWithMultipleFiles.AogSpace}
                    disabled={!editing}
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
