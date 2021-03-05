import React from 'react';
import _ from 'lodash';

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
              ...(data?.financialObligations || []).map(financialObligation =>
                _.omit(financialObligation, 'id', '__typename'),
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
