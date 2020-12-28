import React from 'react';

import { useLocale } from 'hooks';
import { AddIcon, EditIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';

import { AddFolderDialogProps } from './AddFolderDialog.types';

export const AddFolderDialog = ({ isOpened, onClose, onSubmit, isAdd, folderName }: AddFolderDialogProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: isAdd ? 'dms.documents.add_folder.title' : 'dms.documents.rename_folder',
      })}
      initialValues={{ folderName: folderName || '' }}
      addText={formatMessage({ id: isAdd ? 'dms.documents.add_folder' : 'dms.documents.rename_folder' })}
      addIcon={isAdd ? <AddIcon color="inherit" /> : <EditIcon color="inherit" />}
    >
      <GenericField
        name="folderName"
        placeholder={formatMessage({
          id: isAdd ? 'dms.documents.add_folder.placeholder' : 'dms.documents.rename_folder.placeholder',
        })}
        label={formatMessage({ id: 'dms.documents.folder_name' })}
      />
    </FormModal>
  );
};
