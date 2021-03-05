import React from 'react';
import _ from 'lodash';

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
              ...(data?.income || []).map(income =>
                _.omit(
                  income,
                  'id',
                  '__typename',
                  'equityIncome.__typename',
                  'pensionIncome.__typename',
                  'socialBenefitIncome.__typename',
                  'employerIncome.__typename',
                  'employerIncome.employerInformation.__typename',
                  'entrepreneurIncome.__typename',
                  'employerIncome.employer',
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
