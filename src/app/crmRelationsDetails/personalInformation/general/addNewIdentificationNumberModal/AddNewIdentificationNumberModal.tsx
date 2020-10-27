import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { RadioGroupField } from 'form/fields';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { CrmIdentificationNumberType } from 'api/types';

import { AddNewIdentificationNumberModalProps } from './AddNewIdentificationNumberModal.types';

export const AddNewIdentificationNumberModal = ({ isOpened, onSubmit }: AddNewIdentificationNumberModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const types = Object.keys(CrmIdentificationNumberType).map(type => ({
    label: `dictionaries.personal_information_general.identification_number_type.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  const handleClose = () => {
    close('add-new-crm-identification-number');
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_general.identification_number.add_new_identification_number.title',
      })}
    >
      <RadioGroupField name="type" options={types} />
    </FormModal>
  );
};
