import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmFinancialDocument, useUpdateCrmFinancialMutation } from 'api/types';

import {
  AddNewFinancialObligationModalContainerProps,
  AddNewFinancialObligationBody,
} from './AddNewFinancialObligationModal.types';
import { AddNewFinancialObligationModal } from './AddNewFinancialObligationModal';

export const AddNewFinancialObligationModalContainer = ({ id, data }: AddNewFinancialObligationModalContainerProps) => {
  const { isOpen } = useModalState('add-new-financial-obligation');
  const { close } = useModalDispatch();
  const [updateCrmFinancial] = useUpdateCrmFinancialMutation();

  const handleAddNewFinancialObligation = async (values: AddNewFinancialObligationBody) => {
    try {
      const { data: updateData } = await updateCrmFinancial({
        variables: {
          input: {
            id,
            financialObligations: [
              ...(data?.financialObligations || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.obligationType,
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
    close('add-new-financial-obligation');
  };

  return (
    <AddNewFinancialObligationModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewFinancialObligation} />
  );
};
