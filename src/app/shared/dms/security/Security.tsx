import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { CircledNumber, Grid, Box, Typography } from 'ui/atoms';
import { CheckboxField } from 'form/fields';
import { AddSecurityDialog } from '../addSecurityDialog/AddSecurityDialog';
import { Questionaire } from 'api/types';

import { SecurityProps } from './Security.types';

export const Security = ({ title, onSave, data, updatedBy, dateUpdated }: SecurityProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const handleAddNewSecurity = async ({ name }: { name: string }) => {
    await onSave({
      id: data.id,
      meta: data.meta,
      permissions: [
        ...(data?.permissions || []),
        {
          name,
          create: false,
          read: false,
          update: false,
          delete: false,
        },
      ],
    });

    return undefined;
  };

  const handleSaveSecurity = async (values: Questionaire) => {
    await onSave({
      id: data.id,
      meta: data.meta,
      permissions: (values.permissions || []).map((value, index) => ({
        ...(data.permissions || [])[index],
        ...value,
        name: (data.permissions || [])[index].name || '',
      })),
    });

    return undefined;
  };

  return (
    <>
      <Page title={title} titleActions={<></>} updatedBy={updatedBy} dateUpdated={dateUpdated}>
        <FormSection
          title={formatMessage({ id: 'dms.security.document_rights' })}
          isEditable
          isExpandable
          isInitExpanded
          onAdd={() => {
            open('dms-add-security');
          }}
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
                    <Typography variant="body2">
                      {formatMessage({ id: 'dictionaries.settings.rights.Read' })}
                    </Typography>
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
              <AutosaveForm onSave={handleSaveSecurity} initialValues={data}>
                {(data?.permissions || []).map((item, index) => (
                  <Grid container alignItems="center">
                    <Grid item xs={4} lg={3}>
                      <Box display="flex" alignItems="center">
                        <CircledNumber content={index + 1} />
                        <Box ml={1.5} />
                        <Typography variant="h3">{item?.name ?? ''}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={2} lg={1}>
                      <CheckboxField disabled={!editing} name={`securities[${index}].create`} />
                    </Grid>
                    <Grid item xs={2} lg={1}>
                      <CheckboxField disabled={!editing} name={`securities[${index}].read`} />
                    </Grid>
                    <Grid item xs={2} lg={1}>
                      <CheckboxField disabled={!editing} name={`securities[${index}].update`} />
                    </Grid>
                    <Grid item xs={2} lg={1}>
                      <CheckboxField disabled={!editing} name={`securities[${index}].delete`} />
                    </Grid>
                  </Grid>
                ))}
              </AutosaveForm>
            </>
          )}
        </FormSection>
      </Page>
      <AddSecurityDialog onSubmit={handleAddNewSecurity} />
    </>
  );
};
