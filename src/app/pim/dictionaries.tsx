import React from 'react';

import { AogIcon, BogIcon, MutationIcon, NcSaleIcon, RentIcon, SaleIcon } from 'ui/atoms/icons';
import { PropertyType } from 'api/types';

export const PimTypes = [
  {
    name: 'residential',
    icon: <SaleIcon />,
    types: [PropertyType.Apartment, PropertyType.House],
  },
  {
    name: 'new_construction',
    icon: <NcSaleIcon />,
    isProject: true,
  },
  {
    name: 'relet',
    icon: <MutationIcon />,
    isProject: true,
  },
  {
    name: 'commercial',
    icon: <BogIcon />,
    types: [PropertyType.Commercial],
  },
  {
    name: 'commercial_building',
    icon: <RentIcon />,
    isProject: true,
  },
  {
    name: 'agricultural',
    icon: <AogIcon />,
    types: [PropertyType.Agricultural],
  },
  {
    name: 'parkinglot',
    icon: <AogIcon />,
    types: [PropertyType.ParkingLot],
  },
  {
    name: 'building_plot',
    icon: <AogIcon />,
    types: [PropertyType.BuildingPlot],
  },
];
