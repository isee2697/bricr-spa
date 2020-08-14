import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField, UploadImageGroupField } from 'form/fields';
import { Page } from 'ui/templates';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { INSTALLATION_TYPES } from '../dictionaries';
import { AogTypeSpecificFormProps } from '../AogSpaceForm.types';

export const InstallationsForm = ({ data }: AogTypeSpecificFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page
      title={formatMessage({ id: 'pim_details.installations.title' })}
      placeholder="pim_details.installations.description_placeholder"
      name="installation"
      initialValues={{ data }}
      updatedBy={data.lastEditedBy}
      dateUpdated={data.dateUpdated}
    >
      <Grid item xs={12}>
        <FormSection
          title={`${formatMessage({ id: `pim_details.installations.single_title` })} - ${data.name}`}
          isEditable
        >
          {editing => (
            <>
              <GenericField
                disabled={!editing}
                name="name"
                label="pim_details.installations.name"
                placeholder="pim_details.installations.name_placeholder"
              />
              <Box mb={1} />
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.installations.type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <RadioGroupField
                disabled={!editing}
                name="installationsConfiguration.type"
                options={INSTALLATION_TYPES}
              />
              <Box mb={3} />
              <Grid item xs={12}>
                <GenericField
                  name="installationsConfiguration.numberOfSameInstallations"
                  type="number"
                  label="pim_details.installations.amount_of_installations"
                  margin="none"
                  placeholder="pim_details.installations.amount_of_installations_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={12}>
                <GenericField
                  name="installationsConfiguration.notes"
                  label="common.notes"
                  placeholder="pim_details.installations.notes_placeholder"
                  disabled={!editing}
                />
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
