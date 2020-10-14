import React from 'react';
import EuroIcon from '@material-ui/icons/Euro';

import { DevelopmentType, PricingType, PropertyType } from 'api/types';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';

import { TriggerConditionsTypes } from './TriggerConditions.types';

export enum Sizes {
  M = 6,
  L = 12,
}

export enum Types {
  Criteria = 'criteria',
  Range = 'range',
  Checkbox = 'checkbox',
  RadioButton = 'radioButton',
}

export const generalConditionsTypes: TriggerConditionsTypes[] = [
  {
    key: 'trigger_type',
    type: Types.Criteria,
    size: Sizes.L,
    options: [
      { label: 'equal', value: 'equal', icon: <></> },
      { label: 'greater_than', value: 'greater_than', icon: <></> },
    ],
  },
  {
    key: 'origin_type',
    type: Types.Checkbox,
    size: Sizes.M,
    options: [
      {
        label: PropertyType.Apartment,
        value: PropertyType.Apartment,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.House,
        value: PropertyType.House,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.Commercial,
        value: PropertyType.Commercial,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.Agricultural,
        value: PropertyType.Agricultural,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.ParkingLot,
        value: PropertyType.ParkingLot,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.BuildingPlot,
        value: PropertyType.BuildingPlot,
        icon: <BuildingIcon />,
      },
    ],
  },
  {
    key: 'time',
    type: Types.RadioButton,
    size: Sizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
  {
    key: 'other_type',
    type: Types.RadioButton,
    size: Sizes.M,
    options: [
      {
        label: DevelopmentType.New,
        value: DevelopmentType.New,
        icon: <NewConstructionIcon />,
      },
      {
        label: DevelopmentType.Existing,
        value: DevelopmentType.Existing,
        icon: <NewConstructionIcon />,
      },
    ],
  },
];
