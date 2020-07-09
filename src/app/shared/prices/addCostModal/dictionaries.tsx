import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import { CostType } from 'api/types';

export const costTypes = [
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
