import React from 'react';
import { useLocale, useModalDispatch } from 'hooks';
import { SquareIcon } from 'ui/atoms/icons';
import { FinancialObligationType } from '../financialObligations/FinancialObligations.types';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';

import { AddNewFinancialObligationModalProps } from './AddNewFinancialObligationModal.types';

export const AddNewFinancialObligationModal = ({ isOpened, onSubmit }: AddNewFinancialObligationModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-address');
  };

  const obligationTypes = Object.keys(FinancialObligationType).map(obligationType => ({
    label: `dictionaries.financial_profile.financial_obligation_type.${obligationType}`,
    icon: <SquareIcon />,
    value: obligationType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id:
          'crm.details.personal_information_financial_profile.financial_obligations.add_new_financial_obligation.title',
      })}
    >
      <RadioGroupField name="obligationType" options={obligationTypes} />
    </FormModal>
  );
};
