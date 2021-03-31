import React from 'react';

import { AogIcon, BogIcon, MutationIcon, NcSaleIcon, RentIcon, SaleIcon, SquareIcon } from 'ui/atoms/icons';
import { ProjectType, PropertyType } from 'api/types';
import { DevelopmentType, PricingType } from 'api/types';
import { BuildingIcon, EuroIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

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
];

export const PimListFilters: FiltersTypes[] = [
  {
    key: 'city',
    type: Types.Text,
    size: FiltersSizes.L,
  },
  {
    key: 'pricingRange',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
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
    key: 'pricingType',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
  {
    key: 'developmentType',
    type: Types.RadioButton,
    size: FiltersSizes.M,
    options: [
      { label: DevelopmentType.New, value: DevelopmentType.New, icon: <NewConstructionIcon /> },
      { label: DevelopmentType.Existing, value: DevelopmentType.Existing, icon: <NewConstructionIcon /> },
    ],
  },
  {
    key: 'published',
    type: Types.RadioButton,
    size: FiltersSizes.M,
    options: [
      { label: 'yes', value: 'yes', icon: <SquareIcon /> },
      { label: 'no', value: 'no', icon: <SquareIcon /> },
    ],
  },
  {
    key: 'transport',
    type: Types.DateRange,
    size: FiltersSizes.L,
  },
  {
    key: 'available',
    type: Types.DateRange,
    size: FiltersSizes.L,
  },
];
