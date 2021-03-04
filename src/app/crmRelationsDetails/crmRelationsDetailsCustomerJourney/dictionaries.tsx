import React from 'react';

import { PropertyType } from 'api/types';
import { BuildingIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

export const CrmRelationsCustomerJourneyFilters: FiltersTypes[] = [
  {
    key: 'dropped',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [{ label: 'dropped', value: '0', icon: <></> }],
  },
  {
    key: 'reasonDropped',
    type: Types.Checkbox,
    size: FiltersSizes.L,
    options: [
      { label: PropertyType.Apartment, value: PropertyType.Apartment, icon: <BuildingIcon /> },
      { label: PropertyType.House, value: PropertyType.House, icon: <BuildingIcon /> },
      { label: PropertyType.Commercial, value: PropertyType.Commercial, icon: <BuildingIcon /> },
      { label: PropertyType.Agricultural, value: PropertyType.Agricultural, icon: <BuildingIcon /> },
      { label: PropertyType.ParkingLot, value: PropertyType.ParkingLot, icon: <BuildingIcon /> },
      { label: PropertyType.BuildingPlot, value: PropertyType.BuildingPlot, icon: <BuildingIcon /> },
    ],
  },
  {
    key: 'preference',
    type: Types.Text,
    size: FiltersSizes.L,
  },
];
