import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';
import { requireValidator } from 'form/validators';

import { AddTemplateDialogProps } from './AddTemplateDialog.types';

export const AddTemplateDialog = ({ onSubmit }: AddTemplateDialogProps) => {
  const { formatMessage } = useLocale();
  const { isOpen, options } = useModalState('dms-add-template');
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('dms-add-template');
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
        id: 'dms.templates.create_template.title',
      })}
      initialValues={{ name: options?.name || '' }}
      addText={formatMessage({ id: 'dms.templates.create_template' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <GenericField
        name="name"
        placeholder={formatMessage({
          id: 'dms.templates.create_template.placeholder',
        })}
        label={formatMessage({ id: 'dms.templates.template_name' })}
        validate={[requireValidator]}
      />
    </FormModal>
  );
};
