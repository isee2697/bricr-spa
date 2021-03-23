import React from 'react';

import { DevelopmentType, PricingType } from 'api/types';
import { EuroIcon, HomeIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

export const DmsPrimaryFolderFilters: FiltersTypes[] = [
  {
    key: 'dateRange',
    type: Types.DateRange,
    size: FiltersSizes.M,
  },
  {
    key: 'accountManager',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
  {
    key: 'type',
    type: Types.RadioButton,
    size: FiltersSizes.M,
    options: [
      { label: DevelopmentType.New, value: DevelopmentType.New, icon: <NewConstructionIcon /> },
      { label: DevelopmentType.Existing, value: DevelopmentType.Existing, icon: <NewConstructionIcon /> },
    ],
  },
  {
    key: 'status',
    type: Types.RadioButton,
    size: FiltersSizes.M,
    options: [
      { label: 'Active', value: 'active', icon: <HomeIcon /> },
      { label: 'Inactive', value: 'inactive', icon: <HomeIcon /> },
    ],
  },
];
