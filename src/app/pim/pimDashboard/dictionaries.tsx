import React from 'react';

import { DateRangeType, PricingType, PropertyType } from 'api/types';
import { BuildingIcon, ComplexBuildingIcon, EuroIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

export const PimDashboardFilters: FiltersTypes[] = [
  {
    key: 'dateRange',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: DateRangeType.ThirtyDays, value: DateRangeType.ThirtyDays, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.TwoWeeks, value: DateRangeType.TwoWeeks, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.OneWeek, value: DateRangeType.OneWeek, icon: <ComplexBuildingIcon /> },
      { label: DateRangeType.ThreeDays, value: DateRangeType.ThreeDays, icon: <ComplexBuildingIcon /> },
    ],
  },
  {
    key: 'propertyTypes',
    type: Types.Checkbox,
    size: FiltersSizes.M,
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
    key: 'accountManager',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
];
