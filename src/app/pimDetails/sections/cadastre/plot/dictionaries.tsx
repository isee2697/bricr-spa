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

export const ownershipType = Object.keys(CadastreOwnershipType).map(value => ({
  label: `dictionaries.cadastre_ownership_type.${value}`,
  value,
}));

const generateOwnershipItems = (values: OwnershipChoiceType[]) =>
  values.map(value => ({
    label: `dictionaries.cadastre_ownership_value.${value}`,
    icon: <LinkIcon color="inherit" />,
    value,
  }));

export const ownershipValues = {
  PerpetualLeaseChargedWith: generateOwnershipItems([
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.Usufruct,
    OwnershipChoiceType.NoneOfThem,
  ]),
  PropertyChargedWith: generateOwnershipItems([
    OwnershipChoiceType.PerpetualLease,
    OwnershipChoiceType.LimitedRights,
    OwnershipChoiceType.Leasehold,
    OwnershipChoiceType.LeaseholdAndBuilding,
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.Building,
    OwnershipChoiceType.CityMayorLaw,
    OwnershipChoiceType.Usufruct,
  ]),
  AnnualLeaseholdChargedWith: generateOwnershipItems([
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.Usufruct,
    OwnershipChoiceType.NoneOfThem,
  ]),
  LeaseholdAndBuildingChargedWith: generateOwnershipItems([
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.Usufruct,
    OwnershipChoiceType.NoneOfThem,
  ]),
  BuildingChargedWith: generateOwnershipItems([
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.Usufruct,
    OwnershipChoiceType.NoneOfThem,
  ]),
  Other: generateOwnershipItems([
    OwnershipChoiceType.FullOwnership,
    OwnershipChoiceType.UseAndHabitation,
    OwnershipChoiceType.MembershipRight,
    OwnershipChoiceType.SharedOwnership,
    OwnershipChoiceType.PerpetualSublease,
    OwnershipChoiceType.Subleasehold,
    OwnershipChoiceType.RightOfOverhang,
    OwnershipChoiceType.CityMayorLaw,
    OwnershipChoiceType.Usufruct,
    OwnershipChoiceType.SeeDeed,
  ]),
};

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
