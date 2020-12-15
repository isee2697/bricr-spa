import React from 'react';

import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';

import { AddNewAccountModalProps } from './AddNewAccountModal.types';

export const AddNewAccountModal = ({ isOpened, onClose, onSubmit }: AddNewAccountModalProps) => {
  const { formatMessage } = useLocale();
  const handleSubmit = async () => {
    onSubmit();

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'calendar.account_settings.add_new_inbox' })}
      addText={formatMessage({ id: 'calendar.account_settings.add_new_inbox' })}
    >
      <Box>
        <GenericField name="name" label={formatMessage({ id: 'calendar.account_settings.name_inbox' })} />
      </Box>
      <Box>
        <GenericField
          name="mainEmailAddress"
          label={formatMessage({ id: 'calendar.account_settings.main_email_address' })}
        />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField name="settings1" label={formatMessage({ id: 'calendar.account_settings.settings1' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="settings2" label={formatMessage({ id: 'calendar.account_settings.settings2' })} />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField name="settings3" label={formatMessage({ id: 'calendar.account_settings.settings3' })} />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="settings4" label={formatMessage({ id: 'calendar.account_settings.settings4' })} />
        </Grid>
      </Grid>
    </FormModal>
  );
};
