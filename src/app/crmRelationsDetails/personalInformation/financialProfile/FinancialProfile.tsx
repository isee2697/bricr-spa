import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';

import { IncomeInformation } from './incomeInformation/IncomeInformation';
import { BankAccounts } from './bankAccounts/BankAccounts';
import { FinancialObligations } from './financialObligations/FinancialObligations';
import { FinancialProfileProps } from './FinancialProfile.types';

export const FinancialProfile = ({ data, onSave }: FinancialProfileProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.title' })}
        to="/personal_information_financial_profile"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.title' })}
        titleActions={<></>}
        name="financialInfo"
        initialValues={data}
        placeholder="crm.details.personal_information_financial_profile.description_placeholder"
        onSave={onSave}
      >
        <IncomeInformation data={data} onSave={onSave} />
        <FinancialObligations data={data} onSave={onSave} />
        <BankAccounts data={data} onSave={onSave} />
      </Page>
    </>
  );
};
