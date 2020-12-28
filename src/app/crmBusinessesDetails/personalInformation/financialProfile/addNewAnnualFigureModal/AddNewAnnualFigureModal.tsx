import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { AnnualFigureType } from '../annualFigures/AnnualFigures.types';

import { AddNewAnnualFigureModalProps } from './AddNewAnnualFigureModal.types';

export const AddNewAnnualFigureModal = ({ isOpened, onSubmit, onClose }: AddNewAnnualFigureModalProps) => {
  const { formatMessage } = useLocale();

  const incomeInformationItems = Object.keys(AnnualFigureType).map(key => ({
    label: `dictionaries.financial_profile.annual_figure.${key}`,
    icon: <SquareIcon />,
    value: key,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'crm.details.personal_information_financial_profile.annual_figures.title' })}
    >
      <RadioGroupField name="annualFigureType" options={incomeInformationItems} />
    </FormModal>
  );
};
