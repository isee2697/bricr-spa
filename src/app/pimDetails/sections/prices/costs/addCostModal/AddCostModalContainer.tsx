import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';

import { AddCostModalContainerProps } from './AddCostModal.types';
import { AddCostModal } from './AddCostModal';

const options = [
  {
    label: 'dictionaries.prices.cost_type.service',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.heating',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.electricity',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.water',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.sewage',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.water_board',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.land_consolidation_interest',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.homeowner_association',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.ozb_user_part',
    value: '',
    icon: <SquareIcon />,
  },
  {
    label: 'dictionaries.prices.cost_type.ozb_business_part',
    value: '',
    icon: <SquareIcon />,
  },
];

export const AddCostModalContainer = ({ isModalOpened, onModalClose }: AddCostModalContainerProps) => {
  return (
    <AddCostModal isModalOpened={isModalOpened} onModalClose={onModalClose} options={options} onAddCost={() => {}} />
  );
};
