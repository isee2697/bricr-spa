import React from 'react';

import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { NylasAuthorizationInput } from 'api/types';

import { AddNewAccountModalProps } from './AddNewAccountModal.types';

export const AddNewAccountModal = ({ isOpened, onClose, onSubmit }: AddNewAccountModalProps) => {
  const { formatMessage } = useLocale();
  const handleSubmit = async (values: NylasAuthorizationInput) => {
    onSubmit(values);

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'calendar.account_settings.add_new_account' })}
      addText={formatMessage({ id: 'calendar.account_settings.add_new_account' })}
    >
      <Box>
        <GenericField
          type="email"
          name="email"
          label={formatMessage({ id: 'calendar.account_settings.main_email_address' })}
        />
      </Box>
    </FormModal>
  );
};
