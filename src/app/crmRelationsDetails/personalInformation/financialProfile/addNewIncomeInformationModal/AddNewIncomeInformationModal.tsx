import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { IncomeType } from 'api/types';

import { AddNewIncomeInformationModalProps } from './AddNewIncomeInformationModal.types';

export const AddNewIncomeInformationModal = ({ isOpened, onSubmit, onClose }: AddNewIncomeInformationModalProps) => {
  const { formatMessage } = useLocale();

  const incomeInformationItems = Object.keys(IncomeType).map(key => ({
    label: `dictionaries.financial_profile.income_information.${key}`,
    icon: <SquareIcon />,
    value: key,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'crm.details.personal_information_financial_profile.income_information.title' })}
    >
      <RadioGroupField name="incomeType" options={incomeInformationItems} />
    </FormModal>
  );
};
