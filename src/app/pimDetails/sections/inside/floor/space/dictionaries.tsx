import React from 'react';

import {
  LinkIcon,
  FilterIcon,
  BuildingIcon,
  ComplexBuildingIcon,
  UserIcon,
  SettingsIcon,
  WarningIcon,
} from 'ui/atoms/icons';

export const type = [
  {
    label: 'dictionaries.kitchen_type.MainKitchen',
    icon: <FilterIcon color="inherit" />,
    value: 'MainKitchen',
  },
  {
    label: 'dictionaries.kitchen_type.Scullery',
    icon: <LinkIcon color="inherit" />,
    value: 'Scullery',
  },
];

export const construction = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <BuildingIcon color="inherit" />,
    value: 'DenseKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'EatInKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.HalfOpenKitchen',
    icon: <UserIcon color="inherit" />,
    value: 'HalfOpenKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.OpenKitchen',
    icon: <SettingsIcon color="inherit" />,
    value: 'OpenKitchen',
  },
];

export const service = [
  {
    label: 'dictionaries.kitchen_services.KitchenIsland',
    icon: <FilterIcon color="inherit" />,
    value: 'KitchenIsland',
  },
  {
    label: 'dictionaries.kitchen_services.WashIsland',
    icon: <WarningIcon color="inherit" />,
    value: 'WashIsland',
  },
];

export const appliances = [
  {
    label: 'dictionaries.kitchen_appliances.Refrigerator',
    icon: <LinkIcon color="inherit" />,
    value: 'Refrigerator',
  },
  {
    label: 'dictionaries.kitchen_appliances.Microwave',
    icon: <FilterIcon color="inherit" />,
    value: 'Microwave',
  },
  {
    label: 'dictionaries.kitchen_appliances.Dishwasher',
    icon: <BuildingIcon color="inherit" />,
    value: 'Dishwasher',
  },
  {
    label: 'dictionaries.kitchen_appliances.Oven',
    icon: <UserIcon color="inherit" />,
    value: 'Oven',
  },
  {
    label: 'dictionaries.kitchen_appliances.Stove',
    icon: <WarningIcon color="inherit" />,
    value: 'Stove',
  },
];

export const hob = [
  {
    label: 'dictionaries.kitchen_hob.GasHob',
    icon: <SettingsIcon color="inherit" />,
    value: 'GasHob',
  },
  {
    label: 'dictionaries.kitchen_hob.InductionHob',
    icon: <LinkIcon color="inherit" />,
    value: 'InductionHob',
  },
  {
    label: 'dictionaries.kitchen_hob.ElectricHob',
    icon: <FilterIcon color="inherit" />,
    value: 'ElectricHob',
  },
  {
    label: 'dictionaries.kitchen_hob.CeramicHob',
    icon: <BuildingIcon color="inherit" />,
    value: 'CeramicHob',
  },
  {
    label: 'dictionaries.kitchen_hob.HalogenHob',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'HalogenHob',
  },
];

export const shape = [
  {
    label: 'dictionaries.space_shape.Rectangle',
    icon: <SettingsIcon color="inherit" />,
    value: 'Rectangle',
  },
  {
    label: 'dictionaries.space_shape.Square',
    icon: <WarningIcon color="inherit" />,
    value: 'Square',
  },
  {
    label: 'dictionaries.space_shape.LType',
    icon: <LinkIcon color="inherit" />,
    value: 'LType',
  },
  {
    label: 'dictionaries.space_shape.TType',
    icon: <UserIcon color="inherit" />,
    value: 'TType',
  },
  {
    label: 'dictionaries.space_shape.UType',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'UType',
  },
  {
    label: 'dictionaries.space_shape.ZType',
    icon: <LinkIcon color="inherit" />,
    value: 'ZType',
  },
];

export const heating = [
  {
    label: 'dictionaries.space_service_heating.GeothermalHeat',
    icon: <SettingsIcon color="inherit" />,
    value: 'GeothermalHeat',
  },
  {
    label: 'dictionaries.space_service_heating.NoHeating',
    icon: <LinkIcon color="inherit" />,
    value: 'NoHeating',
  },
  {
    label: 'dictionaries.space_service_heating.Fireplace',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'Fireplace',
  },
  {
    label: 'dictionaries.space_service_heating.MultiBurner',
    icon: <UserIcon color="inherit" />,
    value: 'MultiBurner',
  },
  {
    label: 'dictionaries.space_service_heating.HotAirHeating',
    icon: <FilterIcon color="inherit" />,
    value: 'HotAirHeating',
  },
  {
    label: 'dictionaries.space_service_heating.PelletStove',
    icon: <LinkIcon color="inherit" />,
    value: 'PelletStove',
  },
  {
    label: 'dictionaries.space_service_heating.ElectricHeating',
    icon: <LinkIcon color="inherit" />,
    value: 'ElectricHeating',
  },
  {
    label: 'dictionaries.space_service_heating.DistrictHeating',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'DistrictHeating',
  },
  {
    label: 'dictionaries.space_service_heating.GasFireplace',
    icon: <LinkIcon color="inherit" />,
    value: 'GasFireplace',
  },
  {
    label: 'dictionaries.space_service_heating.CoalStove',
    icon: <WarningIcon color="inherit" />,
    value: 'CoalStove',
  },
  {
    label: 'dictionaries.space_service_heating.WallHeating',
    icon: <LinkIcon color="inherit" />,
    value: 'WallHeating',
  },
  {
    label: 'dictionaries.space_service_heating.HeatPump',
    icon: <LinkIcon color="inherit" />,
    value: 'HeatPump',
  },
  {
    label: 'dictionaries.space_service_heating.MotherFireplace',
    icon: <LinkIcon color="inherit" />,
    value: 'MotherFireplace',
  },
  {
    label: 'dictionaries.space_service_heating.GasHeaters',
    icon: <FilterIcon color="inherit" />,
    value: 'GasHeaters',
  },
  {
    label: 'dictionaries.space_service_heating.BlockHeatingWoodStove',
    icon: <BuildingIcon color="inherit" />,
    value: 'BlockHeatingWoodStove',
  },
  {
    label: 'dictionaries.space_service_heating.CentralHeatingBoiler',
    icon: <LinkIcon color="inherit" />,
    value: 'CentralHeatingBoiler',
  },
  {
    label: 'dictionaries.space_service_heating.UnderfloorHeatingEntirely',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'UnderfloorHeatingEntirely',
  },
  {
    label: 'dictionaries.space_service_heating.PossibilityForFireplaceHeat',
    icon: <UserIcon color="inherit" />,
    value: 'PossibilityForFireplaceHeat',
  },
  {
    label: 'dictionaries.space_service_heating.UnderfloorHeatingPartly',
    icon: <SettingsIcon color="inherit" />,
    value: 'UnderfloorHeatingPartly',
  },
  {
    label: 'dictionaries.space_service_heating.RecoveryInstalation',
    icon: <WarningIcon color="inherit" />,
    value: 'RecoveryInstalation',
  },
];
