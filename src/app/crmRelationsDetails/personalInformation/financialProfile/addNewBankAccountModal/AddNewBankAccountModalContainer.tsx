import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmFinancialDocument, useUpdateCrmFinancialMutation } from 'api/types';

import { AddNewBankAccountModalContainerProps, AddNewBankAccountBody } from './AddNewBankAccountModal.types';
import { AddNewBankAccountModal } from './AddNewBankAccountModal';

export const AddNewBankAccountModalContainer = ({ id, data }: AddNewBankAccountModalContainerProps) => {
  const { isOpen } = useModalState('add-new-bank-account');
  const { close } = useModalDispatch();
  const [updateCrmFinancial] = useUpdateCrmFinancialMutation();

  const handleAddNewBankAccount = async (values: AddNewBankAccountBody) => {
    try {
      const { data: updateData } = await updateCrmFinancial({
        variables: {
          input: {
            id,
            bankAccounts: [
              ...(data?.bankAccounts || []),
              {
                type: values.type,
              },
            ],
          },
        },
        refetchQueries: [
          {
            query: GetCrmFinancialDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!updateData || !updateData.updateCrmFinancial) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const onClose = () => {
    close('add-new-bank-account');
  };

  return <AddNewBankAccountModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewBankAccount} />;
};
