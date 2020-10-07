import React from 'react';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { FormModal } from 'ui/organisms';
import { PromiseFunction } from 'app/shared/types';
import { Profile } from 'api/types';
import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';

export const AddUserModal = ({
  isOpened,
  onClose,
  onSubmit,
}: ModalContainerProps & { onSubmit: PromiseFunction<Profile> }) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      title={formatMessage({ id: 'settings.users.add_title' })}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <GenericField placeholder="settings.users.first_name" label="settings.users.first_name" name="firstName" />
        </Grid>
        <Grid item xs={6}>
          <GenericField placeholder="settings.users.last_name" label="settings.users.last_name" name="lastName" />
        </Grid>
        <Grid item xs={12}>
          <GenericField placeholder="settings.users.email" label="settings.users.email" name="email" />
        </Grid>
        <Grid item xs={12}>
          <GenericField
            label="settings.users.function_description"
            placeholder="settings.users.function_description_placeholder"
            name="functionDescription"
          />
        </Grid>
      </Grid>
    </FormModal>
  );
};
