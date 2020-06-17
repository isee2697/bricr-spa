import React from 'react';

import { LinkIcon, FilterIcon, BuildingIcon, ComplexBuildingIcon, SettingsIcon } from 'ui/atoms/icons';
import {
  CodeSizeType,
  OwnershipChoiceType,
  LeaseDurationType,
  LeaseholderType,
  LeaseInformationType,
  CadastreOwnershipType,
} from 'api/types';

export const size = [
  {
    label: 'dictionaries.cadastre_plot_size.ApartmentRightOrCompl',
    icon: <FilterIcon color="inherit" />,
    value: CodeSizeType.Apartment,
  },
  {
    label: 'dictionaries.cadastre_plot_size.Tightness',
    icon: <LinkIcon color="inherit" />,
    value: CodeSizeType.Tightness,
  },
  {
    label: 'dictionaries.cadastre_plot_size.PartLot',
    icon: <BuildingIcon color="inherit" />,
    value: CodeSizeType.PartLot,
  },
  {
    label: 'dictionaries.cadastre_plot_size.InWholePlot',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: CodeSizeType.InWholePlot,
  },
  {
    label: 'dictionaries.cadastre_plot_size.MembershipRight',
    icon: <SettingsIcon color="inherit" />,
    value: CodeSizeType.MembershipRight,
  },
];

export const ownershipType = [
  {
    label: 'dictionaries.cadastre_ownership_type.StressedInChargeOf',
    value: CadastreOwnershipType.StressedInChargeOf,
  },
  {
    label: 'dictionaries.cadastre_ownership_type.LeaseholdAndBuildingChargedWith',
    value: CadastreOwnershipType.LeaseholdAndBuildingChargedWith,
  },
  {
    label: 'dictionaries.cadastre_ownership_type.PropertyInChargeOf',
    value: CadastreOwnershipType.PropertyInChargeOf,
  },
  {
    label: 'dictionaries.cadastre_ownership_type.BuildingResponsibleFor',
    value: CadastreOwnershipType.BuildingResponsibleFor,
  },
  {
    label: 'dictionaries.cadastre_ownership_type.AnnualLeasePaymentsInChargeOf',
    value: CadastreOwnershipType.AnnualLeasePaymentInChargeOf,
  },
  {
    label: 'dictionaries.cadastre_ownership_type.OtherLike',
    value: CadastreOwnershipType.OtherLike,
  },
];

export const ownershipValue = [
  {
    label: 'dictionaries.cadastre_ownership_value.NoneOfThem',
    icon: <FilterIcon color="inherit" />,
    value: OwnershipChoiceType.NoneOfThem,
  },
  {
    label: 'dictionaries.cadastre_ownership_value.UseAndHabitation',
    icon: <LinkIcon color="inherit" />,
    value: OwnershipChoiceType.UseAndHabitation,
  },
  {
    label: 'dictionaries.cadastre_ownership_value.Usufruct',
    icon: <BuildingIcon color="inherit" />,
    value: OwnershipChoiceType.Usufruct,
  },
];

export const leaseholder = [
  {
    label: 'dictionaries.cadastre_leaseholder.Different',
    icon: <FilterIcon color="inherit" />,
    value: LeaseholderType.Different,
  },
  {
    label: 'dictionaries.cadastre_leaseholder.Township',
    icon: <LinkIcon color="inherit" />,
    value: LeaseholderType.Township,
  },
  {
    label: 'dictionaries.cadastre_leaseholder.Private',
    icon: <BuildingIcon color="inherit" />,
    value: LeaseholderType.Private,
  },
];

export const groundInfo = [
  {
    label: 'dictionaries.cadastre_ground_information.Virable',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: LeaseInformationType.Virable,
  },
  {
    label: 'dictionaries.cadastre_ground_information.Fixed',
    icon: <SettingsIcon color="inherit" />,
    value: LeaseInformationType.Fixed,
  },
];

export const groundDuration = [
  {
    label: 'dictionaries.cadastre_ground_duration.Forever',
    icon: <LinkIcon color="inherit" />,
    value: LeaseDurationType.Forever,
  },
  {
    label: 'dictionaries.cadastre_ground_duration.Temporary',
    icon: <BuildingIcon color="inherit" />,
    value: LeaseDurationType.Temporary,
  },
  {
    label: 'dictionaries.cadastre_ground_duration.Constantly',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: LeaseDurationType.Constantly,
  },
];
