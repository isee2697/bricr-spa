import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { AddNewBankAccountModalContainer } from '../addNewBankAccountModal/AddNewBankAccountModalContainer';
import { BankAccountPurposeType, CrmBankAccount } from 'api/types';
import { CardWithList } from 'ui/templates';

import { useStyles } from './BankAccounts.styles';
import { BankAccountsProps } from './BankAccounts.types';

export const BankAccounts = ({ data, onSave }: BankAccountsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const bankAccountPurposes = Object.keys(BankAccountPurposeType).map(bankAccountPurpose => ({
    label: `dictionaries.financial_profile.bank_account_purpose.${bankAccountPurpose}`,
    icon: <SquareIcon />,
    value: bankAccountPurpose,
  }));

  const handleSave = async (values: CrmBankAccount) => {
    try {
      await onSave({
        id,
        bankAccounts: (data?.bankAccounts || []).map(item =>
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
      <CardWithList<CrmBankAccount>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.bank_account.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmBankAccount, isEditing: boolean) => (
          <>
            <FormSubSectionHeader
              title={''}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mb={2} />
            <RadioGroupField name={'type'} options={bankAccountPurposes} />
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.bank_accounts.account_number',
                  })}
                  name={'accountNumber'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.bank_accounts.account_number_placeholder"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <GenericField
                  className={classes.formField}
                  name={'bic'}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.bank_accounts.bic',
                  })}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.bank_accounts.bic"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.bank_accounts.iban',
                  })}
                  name={'iban'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.bank_accounts.iban"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.bank_accounts.swift',
                  })}
                  name={'swift'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.bank_accounts.swift"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data?.bankAccounts || []).map(bankAccount => ({
          ...bankAccount,
          title: formatMessage({ id: `dictionaries.contact_information.kind_of_obligation.${bankAccount.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-bank-account')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable
      />
      <AddNewBankAccountModalContainer id={id} data={data} />
    </>
  );
};
