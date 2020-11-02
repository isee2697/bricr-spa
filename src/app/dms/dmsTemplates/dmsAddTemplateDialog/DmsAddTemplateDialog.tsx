import React from 'react';

import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';

import { DmsAddTemplateDialogProps } from './DmsAddTemplateDialog.types';

export const DmsAddTemplateDialog = ({ isOpened, onClose, onSubmit, name }: DmsAddTemplateDialogProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'dms.templates.create_template.title',
      })}
      initialValues={{ name: name || '' }}
      addText={formatMessage({ id: 'dms.templates.create_template' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <GenericField
        name="templateName"
        placeholder={formatMessage({
          id: 'dms.templates.create_template.placeholder',
        })}
        label={formatMessage({ id: 'dms.templates.template_name' })}
      />
    </FormModal>
  );
};
