import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { CostType, PimPricingDocument, useAddCostsMutation } from 'api/types';

import { AddCostModalContainerProps, CostForm } from './AddCostModal.types';
import { AddCostModal } from './AddCostModal';

const options = [
  {
    label: 'dictionaries.prices.cost_type.Service',
    value: CostType.Service,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.Heating',
    value: CostType.Heating,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.Electricity',
    value: CostType.Electricity,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.Water',
    value: CostType.Water,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.Sewage',
    value: CostType.Sewage,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.WaterBoard',
    value: CostType.WaterBoard,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.LandConsolidationInterest',
    value: CostType.LandConsolidationInterest,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.HomeownerAssociation',
    value: CostType.HomeownerAssociation,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.OzbUserPart',
    value: CostType.OzbUserPart,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.OzbBusinessPart',
    value: CostType.OzbBusinessPart,
    icon: <SquareIcon />,
  },
];

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

  return (
    <AddCostModal isModalOpened={isModalOpened} onModalClose={onModalClose} options={options} onAddCost={handleAdd} />
  );
};
