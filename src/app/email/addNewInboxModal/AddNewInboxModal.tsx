import React from 'react';

import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';

import { AddNewInboxBody, AddNewInboxModalProps } from './AddNewInboxModal.types';

export const AddNewInboxModal = ({ isOpened, onClose, onSubmit }: AddNewInboxModalProps) => {
  const { formatMessage } = useLocale();
  const handleSubmit = async (values: AddNewInboxBody) => {
    onSubmit(values);

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'email.inbox_settings.add_new_inbox' })}
      addText={formatMessage({ id: 'email.inbox_settings.add_new_inbox' })}
    >
      <Box>
        <GenericField name="name" label={formatMessage({ id: 'email.inbox_settings.name_inbox' })} />
      </Box>
      <Box>
        <GenericField
          name="mainEmailAddress"
          label={formatMessage({ id: 'email.inbox_settings.main_email_address' })}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField name="settings1" label={formatMessage({ id: 'email.inbox_settings.settings1' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="settings2" label={formatMessage({ id: 'email.inbox_settings.settings2' })} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField name="settings3" label={formatMessage({ id: 'email.inbox_settings.settings3' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="settings4" label={formatMessage({ id: 'email.inbox_settings.settings4' })} />
        </Grid>
      </Grid>
    </FormModal>
  );
};
