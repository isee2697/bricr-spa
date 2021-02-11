import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { FormModal } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { Box } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';

import { AllocateCriteriaTypes } from './dictionaries';
import { AddAllocateCriteriaBody, AddAllocateCriteriaModalProps } from './AddAllocateCriteriaModal.types';

export const AddAllocateCriteria = ({ onSubmit }: AddAllocateCriteriaModalProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-allocate-criteria');
  const { formatMessage } = useLocale();

  const handleClose = () => {
    close('add-allocate-criteria');
  };

  const handleSubmit = async (values: AddAllocateCriteriaBody) => {
    onSubmit(values);
    handleClose();

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpen}
      onClose={handleClose}
      title={formatMessage({ id: 'settings.allocate_criteria.add_allocate_criteria.title' })}
      addText={formatMessage({ id: 'settings.allocate_criteria.add_allocate_criteria.add_new_allocate_criteria' })}
      addIcon={<AddIcon color="inherit" />}
      onSubmit={handleSubmit}
    >
      <Box>
        <RadioGroupField
          name="typeOfProperty"
          options={AllocateCriteriaTypes.map(type => ({
            ...type,
            label: formatMessage({ id: `dictionaries.allocate_criteria_type.${type.label}` }),
          }))}
        />
        <GenericField
          name="title"
          title={formatMessage({ id: 'settings.allocate_criteria.add_allocate_criteria.title_allocate_criteria' })}
        />
      </Box>
    </FormModal>
  );
};
