import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';
import { GetCrmFinancialDocument, useUpdateCrmFinancialMutation } from 'api/types';

import { AddNewIncomeInformationModal } from './AddNewIncomeInformationModal';
import {
  AddNewIncomeInformationBody,
  AddNewIncomeInformationModalContainerProps,
} from './AddNewIncomeInformationModal.types';

export const AddNewIncomeInformationModalContainer = ({ id, data }: AddNewIncomeInformationModalContainerProps) => {
  const { isOpen } = useModalState('add-new-income-information');
  const { close } = useModalDispatch();
  const [updateCrmFinancial] = useUpdateCrmFinancialMutation();

  const handleAddNewIncomeInformation = async (values: AddNewIncomeInformationBody) => {
    try {
      const { data: updateData } = await updateCrmFinancial({
        variables: {
          input: {
            id,
            income: [
              ...(data?.income || []).map(item =>
                JSON.parse(
                  JSON.stringify(item, (key, value) =>
                    value === null || key === '__typename' || key === 'id' ? undefined : value,
                  ),
                ),
              ),
              {
                type: values.incomeType,
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
    close('add-new-income-information');
  };

  return <AddNewIncomeInformationModal isOpened={isOpen} onClose={onClose} onSubmit={handleAddNewIncomeInformation} />;
};
