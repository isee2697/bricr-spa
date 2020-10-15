import React, { useState } from 'react';
import clsx from 'clsx';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { PromiseFunction } from 'app/shared/types';
import { AddNewBankAccountBody } from '../addNewBankAccountModal/AddNewBankAccountModal.types';
import { Box, Grid, Typography } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { AddNewBankAccountModal } from '../addNewBankAccountModal/AddNewBankAccountModal';
import { AutosaveForm, FormSection, FormSubSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';

import { useStyles } from './BankAccounts.styles';
import { BankAccount, BankAccountPurpose } from './BankAccounts.types';

export const BankAccounts = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-bank-account');
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  const handleAddNewBankAccount: PromiseFunction<AddNewBankAccountBody> = async ({ bankAccountType }) => {
    try {
      const typeIndex: number = bankAccounts.filter(account => account.type === bankAccountType).length + 1;
      setBankAccounts([
        ...bankAccounts,
        {
          type: bankAccountType,
          typeIndex,
          title: `${formatMessage({
            id: `dictionaries.financial_profile.bank_account_type.${bankAccountType}`,
          })} ${typeIndex}`,
          accountNumber: '',
          bic: '',
          iban: '',
          swift: '',
          purpose: BankAccountPurpose.AutomaticIncasso,
        },
      ]);

      close('add-new-bank-account');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues = bankAccounts.reduce((accu, currentValue) => {
    return {
      ...accu,
      [`${currentValue.type}${currentValue.typeIndex}`]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  const bankAccountPurposes = Object.keys(BankAccountPurpose).map(bankAccountPurpose => ({
    label: `dictionaries.financial_profile.bank_account_purpose.${bankAccountPurpose}`,
    icon: <SquareIcon />,
    value: bankAccountPurpose,
  }));

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.bank_accounts.title' })}
        isEditable
        onAdd={() => open('add-new-bank-account')}
      >
        {isEditing => (
          <AutosaveForm onSave={onSave} initialValues={initialValues}>
            <Grid item xs={12}>
              {bankAccounts.length === 0 && (
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {bankAccounts.length > 0 &&
                bankAccounts.map((bankAccount, index) => (
                  <FormSubSection
                    key={index}
                    title={
                      <>
                        <Typography variant="h5" className={classes.bankAccountIndex}>
                          {index + 1}
                        </Typography>
                        <Typography variant="h3" className={classes.bankAccountTitle}>
                          {bankAccount.title}
                        </Typography>
                      </>
                    }
                    onOptionsClick={() => {}}
                  >
                    <Box>
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <Typography variant="h5">
                            {formatMessage({
                              id: 'crm.details.personal_information_financial_profile.bank_accounts.account_number',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${bankAccount.type + bankAccount.typeIndex}.accountNumber`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.bank_accounts.account_number_placeholder"
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <Typography variant="h5">
                            {formatMessage({
                              id: 'crm.details.personal_information_financial_profile.bank_accounts.bic',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${bankAccount.type + bankAccount.typeIndex}.bic`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.bank_accounts.bic"
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <Typography variant="h5">
                            {formatMessage({
                              id: 'crm.details.personal_information_financial_profile.bank_accounts.iban',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${bankAccount.type + bankAccount.typeIndex}.iban`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.bank_accounts.iban"
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item xs={8}>
                          <Typography variant="h5">
                            {formatMessage({
                              id: 'crm.details.personal_information_financial_profile.bank_accounts.swift',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${bankAccount.type + bankAccount.typeIndex}.swift`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.bank_accounts.swift"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box className={clsx(index < bankAccounts.length - 1 && classes.marginBottomFour)}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className={classes.marginBottomTwo}
                      >
                        <Typography variant="h3">
                          {formatMessage({
                            id: 'crm.details.personal_information_financial_profile.bank_accounts.purpose',
                          })}
                        </Typography>
                        <Typography variant="h5" className={classes.gray}>
                          {formatMessage({
                            id: 'common.choose_one_option_below',
                          })}
                        </Typography>
                      </Box>
                      <RadioGroupField
                        name={`${bankAccount.type + bankAccount.typeIndex}.purpose`}
                        options={bankAccountPurposes}
                      />
                    </Box>
                  </FormSubSection>
                ))}
            </Grid>
          </AutosaveForm>
        )}
      </FormSection>
      <AddNewBankAccountModal
        isOpened={isModalOpen}
        onClose={() => close('add-new-bank-account')}
        onSubmit={handleAddNewBankAccount}
      />
    </>
  );
};
