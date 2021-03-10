import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { SquareIcon } from 'ui/atoms/icons';
import { FormModal } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { BankType } from 'api/types';

import { AddNewBankAccountModalProps } from './AddNewBankAccountModal.types';

export const AddNewBankAccountModal = ({ isOpened, onSubmit }: AddNewBankAccountModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleClose = () => {
    close('add-new-address');
  };

  const bankAccountTypes = Object.keys(BankType).map(bankAccountType => ({
    label: `dictionaries.financial_profile.bank_account_type.${bankAccountType}`,
    icon: <SquareIcon />,
    value: bankAccountType,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={handleClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.personal_information_financial_profile.bank_accounts.add_new_bank_account.title',
      })}
    >
      <RadioGroupField name="type" options={bankAccountTypes} />
    </FormModal>
  );
};
