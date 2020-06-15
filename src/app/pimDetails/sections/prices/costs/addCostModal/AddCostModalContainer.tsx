import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { CostType, PimPricingDocument, useAddCostsMutation } from 'api/types';

import { AddCostModalContainerProps, CostForm } from './AddCostModal.types';
import { AddCostModal } from './AddCostModal';

const options = [
  {
    label: 'dictionaries.prices.cost_type.service',
    value: CostType.Service,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.heating',
    value: CostType.Heating,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.electricity',
    value: CostType.Electricity,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.water',
    value: CostType.Water,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.sewage',
    value: CostType.Sewage,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.water_board',
    value: CostType.WaterBoard,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.land_consolidation_interest',
    value: CostType.LandConsolidationInterest,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.homeowner_association',
    value: CostType.HomeownerAssociation,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.ozb_user_part',
    value: CostType.OzbUserPart,
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.ozb_business_part',
    value: CostType.OzbBusinessPart,
    icon: <SquareIcon />,
  },
];

export const AddCostModalContainer = ({ isModalOpened, onModalClose, pimId }: AddCostModalContainerProps) => {
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

      onModalClose();

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
