import React from 'react';

import { AogIcon, BogIcon, MutationIcon, NcSaleIcon, RentIcon, SaleIcon } from 'ui/atoms/icons';
import { ProjectType, PropertyType } from 'api/types';

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
    projectType: ProjectType.NewConstruction,
  },
  {
    name: 'relet',
    icon: <MutationIcon />,
    isProject: true,
    projectType: ProjectType.Relet,
  },
  {
    name: 'commercial',
    icon: <BogIcon />,
    types: [PropertyType.Commercial],
  },
  {
    name: 'building_commercial',
    icon: <RentIcon />,
    isProject: true,
    projectType: ProjectType.Commercial,
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
  {
    name: 'purchase',
    icon: <AogIcon />,
    types: [PropertyType.Other],
  },
];
