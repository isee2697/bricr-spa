import React from 'react';

import { useLocale } from 'hooks';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { FinancialObligationType } from 'api/types';

import { AddNewFinancialObligationModalProps } from './AddNewFinancialObligationModal.types';

export const AddNewFinancialObligationModal = ({
  isOpened,
  onSubmit,
  onClose,
}: AddNewFinancialObligationModalProps) => {
  const { formatMessage } = useLocale();

  const obligationTypes = Object.keys(FinancialObligationType).map(obligationType => ({
    label: `dictionaries.financial_profile.financial_obligation_type.${obligationType}`,
    icon: <SquareIcon />,
    value: obligationType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
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
