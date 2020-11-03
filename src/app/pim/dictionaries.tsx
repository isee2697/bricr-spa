import React from 'react';

import { AogIcon, BogIcon, MutationIcon, NcSaleIcon, RentIcon, SaleIcon } from 'ui/atoms/icons';

export const PimTypes = [
  {
    name: 'residential',
    icon: <SaleIcon />,
  },
  {
    name: 'nc',
    icon: <NcSaleIcon />,
    isProject: true,
  },
  {
    name: 'mutation',
    icon: <MutationIcon />,
    isProject: true,
  },
  {
    name: 'bog',
    icon: <BogIcon />,
  },
  {
    name: 'bog_building',
    icon: <RentIcon />,
    isProject: true,
  },
  {
    name: 'aog',
    icon: <AogIcon />,
  },
  {
    name: 'parkinglot',
    icon: <AogIcon />,
  },
  {
    name: 'plot',
    icon: <AogIcon />,
  },
];
