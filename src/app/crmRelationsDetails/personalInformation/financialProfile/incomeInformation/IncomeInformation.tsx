import React from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { CrmIncome, IncomeType } from 'api/types';
import { AddNewIncomeInformationModalContainer } from '../addNewIncomeInformationModal/AddNewIncomeInformationModalContainer';
import { CardWithList } from 'ui/templates';

import { IncomeInformationProps } from './IncomeInformation.types';
import { Employer } from './employer/Employer';
import { IncomeEquity } from './incomeEquity/IncomeEquity';
import { Pension } from './pension/Pension';
import { Entrepreneur } from './entrepreneur/Entrepreneur';
import { SocialBenefit } from './socialBenefit/SocialBenefit';

export const IncomeInformation = ({ data, onSave }: IncomeInformationProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const handleSave = async (values: CrmIncome) => {
    try {
      await onSave({
        id,
        income: (data?.income || []).map(item =>
          JSON.parse(
            JSON.stringify(item.id === values.id ? _.omit(values, ['title']) : item, (key, value) =>
              value === null || key === '__typename' || key === 'id' ? undefined : value,
            ),
          ),
        ),
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <CardWithList<CrmIncome>
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.income_information.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.addresses.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.addresses.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmIncome, isEditing: boolean) => (
          <>
            {item.type === IncomeType.Employer && <Employer isEditing={isEditing} />}
            {item.type === IncomeType.Equity && <IncomeEquity isEditing={isEditing} />}
            {item.type === IncomeType.Pension && <Pension isEditing={isEditing} />}
            {item.type === IncomeType.SocialBenefit && <SocialBenefit isEditing={isEditing} />}
            {item.type === IncomeType.Entrepreneur && <Entrepreneur isEditing={isEditing} />}
          </>
        )}
        items={(data?.income || []).map(item => ({
          ...item,
          title: formatMessage({ id: `dictionaries.financial_profile.income_information.${item.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-income-information')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable
      />
      <AddNewIncomeInformationModalContainer id={id} data={data} />
    </>
  );
};
