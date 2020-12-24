import React from 'react';

import { HomeIcon, SquareIcon } from 'ui/atoms/icons';

export const typeOfConstruction = [
  {
    label: 'dictionaries.type_of_construction.existing_property',
    icon: <HomeIcon color="inherit" />,
    value: 'ExistingProperty',
  },
  {
    label: 'dictionaries.type_of_construction.new_construction',
    icon: <HomeIcon color="inherit" />,
    value: 'NewConstruction',
  },
];

export const rentalPeriod = [
  {
    label: 'dictionaries.rental_period.half_year',
    icon: <SquareIcon />,
    value: 'HalfYear',
  },
  {
    label: 'dictionaries.rental_period.one_year',
    icon: <SquareIcon />,
    value: 'OneYear',
  },
  {
    label: 'dictionaries.rental_period.two_years',
    icon: <SquareIcon />,
    value: 'TwoYears',
  },
  {
    label: 'dictionaries.rental_period.three_years',
    icon: <SquareIcon />,
    value: 'ThreeYears',
  },
  {
    label: 'dictionaries.rental_period.undetermined',
    icon: <SquareIcon />,
    value: 'UndeterminedTime',
  },
];

export const property = [
  {
    label: 'dictionaries.property.apartment',
    value: 'Apartment',
  },
  {
    label: 'dictionaries.property.single_family_home',
    value: 'SingleFamilyHome',
  },
  {
    label: 'dictionaries.property.detached',
    value: 'Detached',
  },
  {
    label: 'dictionaries.property.corner_house',
    value: 'CornerHouse',
  },
  {
    label: 'dictionaries.property.recreation_house',
    value: 'RecreationHouse',
  },
  {
    label: 'dictionaries.property.building_plot',
    value: 'BuildingPlot',
  },
];

export const propertyChoice = [
  {
    label: 'dictionaries.property_choice.none_of_them',
    icon: <SquareIcon />,
    value: 'NoneOfThem',
  },
  {
    label: 'dictionaries.property_choice.use_and_habitation',
    icon: <SquareIcon />,
    value: 'UseAndHabitation',
  },
  {
    label: 'dictionaries.property_choice.usufruct',
    icon: <SquareIcon />,
    value: 'Usufruct',
  },
];

export const gardenSituation = [
  {
    label: 'dictionaries.garden_situation.north',
    icon: <HomeIcon />,
    value: 'North',
  },
  {
    label: 'dictionaries.garden_situation.east',
    icon: <HomeIcon />,
    value: 'East',
  },
  {
    label: 'dictionaries.garden_situation.south',
    icon: <HomeIcon />,
    value: 'South',
  },
  {
    label: 'dictionaries.garden_situation.west',
    icon: <HomeIcon />,
    value: 'West',
  },
];
