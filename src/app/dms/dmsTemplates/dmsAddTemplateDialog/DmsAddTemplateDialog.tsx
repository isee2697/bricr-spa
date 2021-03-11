import React from 'react';
import { Field } from 'react-final-form';

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
        id: 'dms.templates.create_template',
      })}
      initialValues={{ name: name || '' }}
      addText={formatMessage({ id: 'dms.templates.add_template' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <Field name="templateName" validate={value => (value ? undefined : 'common.required')}>
        {({ input }) => (
          <GenericField
            placeholder={formatMessage({
              id: 'dms.templates.create_template.placeholder',
            })}
            label={formatMessage({ id: 'dms.templates.template_name' })}
            {...input}
          />
        )}
      </Field>
    </FormModal>
  );
};
