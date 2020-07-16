import React from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Page } from 'ui/templates';
import { Button, Grid, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

export const ObjectTypes = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <ProjectDetailsHeader
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: 'project_details.object_types.add' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'project_details.object_types.title' })}
        placeholder={formatMessage({ id: 'project_details.object_types.description_placeholder' })}
        name="description"
        onSave={() => Promise.resolve(undefined)}
      >
        <Grid item xs={12}>
          <FormSection isEditable={false} title="">
            <InfoSection emoji="🤔">
              <Typography variant="h3">{formatMessage({ id: 'project_details.object_types.empty_line_1' })}</Typography>
              <Typography variant="h3">{formatMessage({ id: 'project_details.object_types.empty_line_2' })}</Typography>
            </InfoSection>
          </FormSection>
        </Grid>
      </Page>
    </>
  );
};
