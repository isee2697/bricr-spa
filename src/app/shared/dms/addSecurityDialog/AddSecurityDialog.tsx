import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';
import { requireValidator } from 'form/validators';

import { AddSecurityDialogProps } from './AddSecurityDialog.types';

export const AddSecurityDialog = ({ onSubmit }: AddSecurityDialogProps) => {
  const { formatMessage } = useLocale();
  const { isOpen } = useModalState('dms-add-security');
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('dms-add-security');
  };

  const handleSubmit = async (values: { name: string }) => {
    await onSubmit(values);

    handleClose();

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title={formatMessage({
        id: 'dms.templates.create_security.title',
      })}
      addText={formatMessage({ id: 'dms.templates.create_security' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <GenericField
        name="name"
        placeholder={formatMessage({
          id: 'dms.templates.create_security.placeholder',
        })}
        label={formatMessage({ id: 'dms.templates.security_name' })}
        validate={[requireValidator]}
      />
    </FormModal>
  );
};
