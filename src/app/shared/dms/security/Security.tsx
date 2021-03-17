import React from 'react';

import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { CircledNumber, Grid, Box, Typography } from 'ui/atoms';
import { CheckboxField } from 'form/fields';

import { SecurityProps } from './Security.types';

export const Security = ({ title, onSave, data, updatedBy, dateUpdated }: SecurityProps) => {
  const { formatMessage } = useLocale();

  return (
    <Page title={title} titleActions={<></>} updatedBy={updatedBy} dateUpdated={dateUpdated}>
      <FormSection
        title={formatMessage({ id: 'dms.security.document_rights' })}
        isEditable
        isExpandable
        isInitExpanded
        onAdd={() => {}}
      >
        {editing => (
          <>
            <Box mt={2} mb={1}>
              <Grid container alignItems="center">
                <Grid item xs={4} lg={3} />
                <Grid item xs={2} lg={1}>
                  <Typography variant="body2">
                    {formatMessage({ id: 'dictionaries.settings.rights.Create' })}
                  </Typography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <Typography variant="body2">{formatMessage({ id: 'dictionaries.settings.rights.Read' })}</Typography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <Typography variant="body2">
                    {formatMessage({ id: 'dictionaries.settings.rights.Update' })}
                  </Typography>
                </Grid>
                <Grid item xs={2} lg={1}>
                  <Typography variant="body2">
                    {formatMessage({ id: 'dictionaries.settings.rights.Delete' })}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            {data.documentRights.map((item, index) => (
              <AutosaveForm onSave={onSave} initialValues={item}>
                <Grid container alignItems="center">
                  <Grid item xs={4} lg={3}>
                    <Box display="flex" alignItems="center">
                      <CircledNumber content={index + 1} />
                      <Box ml={1.5} />
                      <Typography variant="h3">{item.name}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2} lg={1}>
                    <CheckboxField disabled={!editing} name="permissions.create" />
                  </Grid>
                  <Grid item xs={2} lg={1}>
                    <CheckboxField disabled={!editing} name="permissions.read" />
                  </Grid>
                  <Grid item xs={2} lg={1}>
                    <CheckboxField disabled={!editing} name="permissions.update" />
                  </Grid>
                  <Grid item xs={2} lg={1}>
                    <CheckboxField disabled={!editing} name="permissions.delete" />
                  </Grid>
                </Grid>
              </AutosaveForm>
            ))}
          </>
        )}
      </FormSection>
    </Page>
  );
};
