import React from 'react';

import { DevelopmentType, PricingType, PropertyType } from 'api/types';
import { BuildingIcon, EuroIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

export const FileFilters: FiltersTypes[] = [
  {
    key: 'fileSize',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
    ],
  },
  {
    key: 'fileType',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      { label: 'pdf', value: 'pdf', icon: <BuildingIcon /> },
      { label: 'png', value: 'png', icon: <BuildingIcon /> },
      { label: 'jpg', value: 'jpg', icon: <BuildingIcon /> },
      { label: 'docx', value: 'docx', icon: <BuildingIcon /> },
      { label: 'xlsx', value: 'xlsx', icon: <BuildingIcon /> },
    ],
  },
];

export const EmailFilters: FiltersTypes[] = [
  {
    key: 'fileSize',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
    ],
  },
  {
    key: 'fileType',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      { label: 'pdf', value: PropertyType.Apartment, icon: <BuildingIcon /> },
      { label: 'png', value: PropertyType.House, icon: <BuildingIcon /> },
      { label: 'jpg', value: PropertyType.Commercial, icon: <BuildingIcon /> },
      { label: 'docx', value: PropertyType.Agricultural, icon: <BuildingIcon /> },
      { label: 'xlsx', value: PropertyType.ParkingLot, icon: <BuildingIcon /> },
    ],
  },
];
