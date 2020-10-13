import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { IncomeInformationType } from '../incomeInformation/IncomeInformation.types';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';

import { AddNewIncomeInformationModalProps } from './AddNewIncomeInformationModal.types';

export const AddNewIncomeInformationModal = ({ isOpened, onSubmit, onClose }: AddNewIncomeInformationModalProps) => {
  const { formatMessage } = useLocale();

  const incomeInformationItems = Object.keys(IncomeInformationType).map(incomeInformationType => ({
    label: `dictionaries.financial_profile.income_information.${incomeInformationType}`,
    icon: <SquareIcon />,
    value: incomeInformationType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'crm.details.personal_information_financial_profile.income_information.title' })}
    >
      <RadioGroupField name="incomeInformationType" options={incomeInformationItems} />
    </FormModal>
  );
};
