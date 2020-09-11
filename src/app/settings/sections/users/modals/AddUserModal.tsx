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
          <GenericField name="firstName" />
        </Grid>
        <Grid item xs={6}>
          <GenericField name="lastName" />
        </Grid>
        <Grid item xs={12}>
          <GenericField name="email" />
        </Grid>
        <Grid item xs={12}>
          <GenericField name="functionDescription" />
        </Grid>
      </Grid>
    </FormModal>
  );
};
