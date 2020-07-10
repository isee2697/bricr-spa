import React from 'react';
import { useParams } from 'react-router-dom';

import { GenericField, UploadImageGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { FormSection } from 'ui/organisms';

export const ProjectMarketing = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.project_marketing.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => (
        <>
          <Box mb={4}>
            <Box mb={2}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'project_details.characteristics.project_marketing.logos_title' })}
                subtitle={formatMessage({ id: 'project_details.characteristics.project_marketing.logos_subtitle' })}
              />
            </Box>
            {/*TODO enable when backend is ready*/}
            <UploadImageGroupField
              name="projectMarketing.logos"
              entity={EntityWithFiles.Pim}
              entityID={id}
              removeEntity={EntityWithMultipleFiles.Pim}
              disabled={true}
            />
          </Box>
          <Box>
            <Box mb={2}>
              <FormSubSectionHeader
                title={formatMessage({ id: 'project_details.characteristics.project_marketing.online_title' })}
                subtitle={formatMessage({ id: 'project_details.characteristics.project_marketing.online_subtitle' })}
              />
              <GenericField
                name="projectMarketing.emailAddress"
                label="project_details.characteristics.project_marketing.email_label"
                placeholder="project_details.characteristics.project_marketing.email_placeholder"
                disabled={!inEditMode}
              />
              <GenericField
                name="projectMarketing.website"
                label="project_details.characteristics.project_marketing.website_label"
                placeholder="project_details.characteristics.project_marketing.website_placeholder"
                disabled={!inEditMode}
              />
              {/* TODO place colorpicker field when merged*/}
            </Box>
          </Box>
        </>
      )}
    </FormSection>
  );
};
