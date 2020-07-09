import React from 'react';

import { PimPricingDocument, useAddCostsMutation } from 'api/types';

import { AddCostModalContainerProps, CostForm } from './AddCostModal.types';
import { AddCostModal } from './AddCostModal';

export const AddCostModalContainer = ({ isModalOpened, onModalClose, pimId, onAdd }: AddCostModalContainerProps) => {
  const [addCost] = useAddCostsMutation();

  const handleAdd = async (values: CostForm) => {
    if (!pimId) {
      throw new Error();
    }

    try {
      await addCost({
        variables: {
          input: {
            id: pimId,
            ...values,
          },
        },
        refetchQueries: [
          {
            query: PimPricingDocument,
            variables: {
              id: pimId,
            },
          },
        ],
      });

      onAdd();

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return <AddCostModal isModalOpened={isModalOpened} onModalClose={onModalClose} onAddCost={handleAdd} />;
};
