import React from 'react';

import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';

import { DmsAddBlockDialogProps } from './DmsAddBlockDialog.types';

export const DmsAddBlockDialog = ({ isOpened, onClose, onSubmit, name }: DmsAddBlockDialogProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'dms.content_blocks.create_block.title',
      })}
      initialValues={{ name: name || '' }}
      addText={formatMessage({ id: 'dms.content_blocks.create_block' })}
      addIcon={<AddIcon color="inherit" />}
    >
      <GenericField
        name="blockName"
        placeholder={formatMessage({
          id: 'dms.content_blocks.create_block.placeholder',
        })}
        label={formatMessage({ id: 'dms.content_blocks.block_name' })}
      />
    </FormModal>
  );
};
