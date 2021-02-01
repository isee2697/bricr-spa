import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { FormModal } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField, RadioGroupField } from 'form/fields';
import { AddNewPublicationBody } from '../sections/publication/Publication.types';

import { PublicationTypes } from './dictionaries';
import { AddPublicationModalProps } from './AddPublicationModal.types';

export const AddPublicationModal = ({ onAddNewPublication }: AddPublicationModalProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-new-publication');
  const { formatMessage } = useLocale();

  const onSubmit = async (values: AddNewPublicationBody) => {
    await onAddNewPublication(values);
    handleClose();

    return undefined;
  };

  const handleClose = () => {
    close('add-new-publication');
  };

  return (
    <FormModal
      isOpened={isOpen}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'pim_details.publication.add_publication.title' })}
      addIcon={<AddIcon color="inherit" />}
      addText={formatMessage({ id: 'pim_details.publication.add_publication.add_new' })}
    >
      <RadioGroupField
        name="type"
        options={PublicationTypes.map(type => ({
          ...type,
          label: formatMessage({ id: type.label }),
        }))}
      />
      <GenericField
        name="name"
        label={formatMessage({ id: 'pim_details.publication.add_publication.name_of_external_platform' })}
      />
    </FormModal>
  );
};
