import React from 'react';
import { BuildingIcon } from '../../../ui/atoms/icons';
import { PropertyType } from '../../../api/types';

import { ClientType } from './Setup.types';

export const ClientTypes = [
  {
    label: 'setup.client.broker',
    icon: <BuildingIcon />,
    value: ClientType.Broker,
  },
  {
    label: 'setup.client.developer',
    icon: <BuildingIcon />,
    value: ClientType.Developer,
  },
  {
    label: 'setup.client.administrator',
    icon: <BuildingIcon />,
    value: ClientType.Administrator,
  },
];

export const PropertyTypes = Object.values(PropertyType)
  .filter(type => type !== PropertyType.BuildingPlot && type !== PropertyType.ParkingLot && type !== PropertyType.Other)
  .map(type => ({
    label: type,
    icon: <BuildingIcon />,
    value: type,
  }));
