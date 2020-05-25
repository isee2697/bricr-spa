import React from 'react';

import { LinkIcon, FilterIcon, BuildingIcon, ComplexBuildingIcon, SettingsIcon } from 'ui/atoms/icons';

export const size = [
  {
    label: 'dictionaries.cadastre_plot_size.ApartmentRightOrCompl',
    icon: <FilterIcon color="inherit" />,
    value: 'apartmentRightOrCompl',
  },
  {
    label: 'dictionaries.cadastre_plot_size.Tightness ',
    icon: <LinkIcon color="inherit" />,
    value: 'tightness ',
  },
  {
    label: 'dictionaries.cadastre_plot_size.PartLot',
    icon: <BuildingIcon color="inherit" />,
    value: 'partLot',
  },
  {
    label: 'dictionaries.cadastre_plot_size.InWholePlot',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'inWholePlot',
  },
  {
    label: 'dictionaries.cadastre_plot_size.MembershipRight',
    icon: <SettingsIcon color="inherit" />,
    value: 'membershipRight',
  },
];

export const ownershipType = [
  {
    label: 'dictionaries.cadastre_ownership_type.StressedInChargeOf',
    value: 'stressedInChargeOf',
  },
  {
    label: 'dictionaries.cadastre_ownership_type.LeaseholdAndBuildingChargedWith',
    value: 'leaseholdAndBuildingChargedWith',
  },
  {
    label: 'dictionaries.cadastre_ownership_type.PropertyInChargeOf',
    value: 'propertyInChargeOf',
  },
  {
    label: 'dictionaries.cadastre_ownership_type.BuildingResponsibleFor',
    value: 'buildingResponsibleFor',
  },
  {
    label: 'dictionaries.cadastre_ownership_type.AnnualLeasePaymentsInChargeOf',
    value: 'annualLeasePaymentsInChargeOf',
  },
  {
    label: 'dictionaries.cadastre_ownership_type.OtherLike',
    value: 'otherLike',
  },
];

export const ownershipValue = [
  {
    label: 'dictionaries.cadastre_ownership_value.NoneOfThem',
    icon: <FilterIcon color="inherit" />,
    value: 'noneOfThem',
  },
  {
    label: 'dictionaries.cadastre_ownership_value.UseAndHabitation',
    icon: <LinkIcon color="inherit" />,
    value: 'useAndHabitation',
  },
  {
    label: 'dictionaries.cadastre_ownership_value.Usufruct',
    icon: <BuildingIcon color="inherit" />,
    value: 'usufruct',
  },
];

export const leaseholder = [
  {
    label: 'dictionaries.cadastre_leaseholder.Different',
    icon: <FilterIcon color="inherit" />,
    value: 'different',
  },
  {
    label: 'dictionaries.cadastre_leaseholder.Township',
    icon: <LinkIcon color="inherit" />,
    value: 'township',
  },
  {
    label: 'dictionaries.cadastre_leaseholder.Private',
    icon: <BuildingIcon color="inherit" />,
    value: 'private',
  },
];

export const groundInfo = [
  {
    label: 'dictionaries.cadastre_ground_information.Virable',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'virable',
  },
  {
    label: 'dictionaries.cadastre_ground_information.Fixed',
    icon: <SettingsIcon color="inherit" />,
    value: 'fixed',
  },
];

export const groundDuration = [
  {
    label: 'dictionaries.cadastre_ground_duration.Forever',
    icon: <LinkIcon color="inherit" />,
    value: 'forever',
  },
  {
    label: 'dictionaries.cadastre_ground_duration.Temporary',
    icon: <BuildingIcon color="inherit" />,
    value: 'temporary',
  },
  {
    label: 'dictionaries.cadastre_ground_duration.Constantly',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'constantly',
  },
];
