import React from 'react';
import { useParams } from 'react-router-dom';

import { ColorPickerField, GenericField, UploadImageGroupField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { FormSection } from 'ui/organisms';
import { emailValidator, urlValidator } from 'form/validators';
import { EntityType, useEntityType } from 'app/shared/entityType';

import { EntityWithFilesMap, EntityWithMultipleFilesMap, FormProps } from './Forms.types';

const entityWithFilesMap: EntityWithFilesMap = {
  [EntityType.ObjectType]: EntityWithFiles.ObjectTypeProjectMarketing,
  [EntityType.Project]: EntityWithFiles.NcpProjectMarketing,
};

const entityWithMultipleFilesMap: EntityWithMultipleFilesMap = {
  [EntityType.ObjectType]: EntityWithMultipleFiles.ObjectTypeProjectMarketing,
  [EntityType.Project]: EntityWithMultipleFiles.NcpProjectMarketing,
};

export const ProjectMarketing = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();
  const entity = entityWithFilesMap[entityType];
  const removeEntity = entityWithMultipleFilesMap[entityType];

  return (
    <FormSection
      title={formatMessage({
        id: 'project_details.characteristics.project_marketing.title',
      })}
      isEditable
      isExpandable
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <>
          <Box mb={4}>
            <Box mb={2}>
              <FormSubSectionHeader
                title={formatMessage({
                  id: 'project_details.characteristics.project_marketing.logos_title',
                })}
                subtitle={formatMessage({
                  id: 'project_details.characteristics.project_marketing.logos_subtitle',
                })}
              />
            </Box>
            {entity && removeEntity && (
              <UploadImageGroupField
                name="projectMarketing.logos"
                entity={entity}
                entityID={id}
                removeEntity={removeEntity}
                disabled={!inEditMode}
                mainName="projectMarketing.mainLogoId"
              />
            )}
          </Box>
          <Box>
            <Box mb={2}>
              <FormSubSectionHeader
                title={formatMessage({
                  id: 'project_details.characteristics.project_marketing.online_title',
                })}
                subtitle={formatMessage({
                  id: 'project_details.characteristics.project_marketing.online_subtitle',
                })}
              />
              <GenericField
                name="projectMarketing.emailAddress"
                label="project_details.characteristics.project_marketing.email_label"
                placeholder="project_details.characteristics.project_marketing.email_placeholder"
                disabled={!inEditMode}
                validate={[emailValidator]}
              />
              <GenericField
                name="projectMarketing.website"
                label="project_details.characteristics.project_marketing.website_label"
                placeholder="project_details.characteristics.project_marketing.website_placeholder"
                disabled={!inEditMode}
                validate={[urlValidator]}
              />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <ColorPickerField
                    name="projectMarketing.firstColor"
                    disabled={!inEditMode}
                    label="project_details.characteristics.project_marketing.color_one"
                    placeholder="project_details.characteristics.project_marketing.color_placeholder"
                    defaultColor="#FFFFFFFF"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ColorPickerField
                    name="projectMarketing.secondColor"
                    disabled={!inEditMode}
                    label="project_details.characteristics.project_marketing.color_two"
                    placeholder="project_details.characteristics.project_marketing.color_placeholder"
                    defaultColor="#FFFFFFFF"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
      )}
    </FormSection>
  );
};
