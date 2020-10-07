import React from 'react';

import {
  KitchenType,
  KitchenConstruction,
  KitchenServices,
  KitchenAppliances,
  KitchenHob,
  LivingRoomType,
  BathroomServices,
  SpaceShape,
  SpaceServiceHeating,
} from 'api/types';
import {
  LinkIcon,
  FilterIcon,
  BuildingIcon,
  ComplexBuildingIcon,
  UserIcon,
  SettingsIcon,
  WarningIcon,
  SquareIcon,
} from 'ui/atoms/icons';

export const kitchenType = [
  {
    label: 'dictionaries.kitchen_type.MainKitchen',
    icon: <FilterIcon color="inherit" />,
    value: KitchenType.MainKitchen,
  },
  {
    label: 'dictionaries.kitchen_type.Scullery',
    icon: <LinkIcon color="inherit" />,
    value: KitchenType.Scullery,
  },
];

export const kitchenConstruction = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <BuildingIcon color="inherit" />,
    value: KitchenConstruction.ClosedKitchen,
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: KitchenConstruction.EatInKitchen,
  },
  {
    label: 'dictionaries.kitchen_construction.HalfOpenKitchen',
    icon: <UserIcon color="inherit" />,
    value: KitchenConstruction.HalfOpenKitchen,
  },
  {
    label: 'dictionaries.kitchen_construction.OpenKitchen',
    icon: <SettingsIcon color="inherit" />,
    value: KitchenConstruction.OpenKitchen,
  },
];

export const kitchenService = [
  {
    label: 'dictionaries.kitchen_services.KitchenIsland',
    icon: <FilterIcon color="inherit" />,
    value: KitchenServices.KitchenIsland,
  },
  {
    label: 'dictionaries.kitchen_services.WashIsland',
    icon: <WarningIcon color="inherit" />,
    value: KitchenServices.WashIsland,
  },
];

export const kitchenAppliances = [
  {
    label: 'dictionaries.kitchen_appliances.Refrigerator',
    icon: <LinkIcon color="inherit" />,
    value: KitchenAppliances.Refrigerator,
  },
  {
    label: 'dictionaries.kitchen_appliances.Microwave',
    icon: <FilterIcon color="inherit" />,
    value: KitchenAppliances.Microwave,
  },
  {
    label: 'dictionaries.kitchen_appliances.Dishwasher',
    icon: <BuildingIcon color="inherit" />,
    value: KitchenAppliances.Dishwasher,
  },
  {
    label: 'dictionaries.kitchen_appliances.Oven',
    icon: <UserIcon color="inherit" />,
    value: KitchenAppliances.Oven,
  },
  {
    label: 'dictionaries.kitchen_appliances.Stove',
    icon: <WarningIcon color="inherit" />,
    value: KitchenAppliances.Stove,
  },
];

export const kitchenHob = [
  {
    label: 'dictionaries.kitchen_hob.GasHob',
    icon: <SettingsIcon color="inherit" />,
    value: KitchenHob.GasHob,
  },
  {
    label: 'dictionaries.kitchen_hob.InductionHob',
    icon: <LinkIcon color="inherit" />,
    value: KitchenHob.InductionHob,
  },
  {
    label: 'dictionaries.kitchen_hob.ElectricHob',
    icon: <FilterIcon color="inherit" />,
    value: KitchenHob.ElectricHob,
  },
  {
    label: 'dictionaries.kitchen_hob.CeramicHob',
    icon: <BuildingIcon color="inherit" />,
    value: KitchenHob.CeramicHob,
  },
  {
    label: 'dictionaries.kitchen_hob.HalogenHob',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: KitchenHob.HalogenHob,
  },
];

export const livingRoomType = [
  {
    label: 'dictionaries.livingroom_type.ThroughRoom',
    icon: <SquareIcon color="inherit" />,
    value: LivingRoomType.ThroughRoom,
  },
  {
    label: 'dictionaries.livingroom_type.FormerEnSuite',
    icon: <SquareIcon color="inherit" />,
    value: LivingRoomType.FormerEnSuite,
  },
  {
    label: 'dictionaries.livingroom_type.RoomAndSuite',
    icon: <SquareIcon color="inherit" />,
    value: LivingRoomType.RoomAndSuite,
  },
  {
    label: 'dictionaries.livingroom_type.Conservatory',
    icon: <SquareIcon color="inherit" />,
    value: LivingRoomType.Conservatory,
  },
];

export const bathroomServices = [
  {
    label: 'dictionaries.bathroom_service.Bidet',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Bidet,
  },
  {
    label: 'dictionaries.bathroom_service.Sauna',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Sauna,
  },
  {
    label: 'dictionaries.bathroom_service.WashingMachineConnection',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.WashingMachineConnection,
  },
  {
    label: 'dictionaries.bathroom_service.Shower',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Shower,
  },
  {
    label: 'dictionaries.bathroom_service.SteamCabin',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.SteamCabin,
  },
  {
    label: 'dictionaries.bathroom_service.Sink',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Sink,
  },
  {
    label: 'dictionaries.bathroom_service.DoubleWashbasin',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.CoubleWashbasin,
  },
  {
    label: 'dictionaries.bathroom_service.Toilet',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Toilet,
  },
  {
    label: 'dictionaries.bathroom_service.Washbasin',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Washbasin,
  },
  {
    label: 'dictionaries.bathroom_service.WalkInShower',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.WalkInShower,
  },
  {
    label: 'dictionaries.bathroom_service.Urinal',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Urinal,
  },
  {
    label: 'dictionaries.bathroom_service.Whirlpool',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Whirlpool,
  },
  {
    label: 'dictionaries.bathroom_service.Jacuzzi',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Jacuzzi,
  },
  {
    label: 'dictionaries.bathroom_service.SitzBath',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.SitzBath,
  },
  {
    label: 'dictionaries.bathroom_service.Bathtub',
    icon: <SquareIcon color="inherit" />,
    value: BathroomServices.Bathtub,
  },
];

export const shape = [
  {
    label: 'dictionaries.space_shape.Rectangle',
    icon: <SettingsIcon color="inherit" />,
    value: SpaceShape.Rectangle,
  },
  {
    label: 'dictionaries.space_shape.Square',
    icon: <WarningIcon color="inherit" />,
    value: SpaceShape.Square,
  },
  {
    label: 'dictionaries.space_shape.LType',
    icon: <LinkIcon color="inherit" />,
    value: SpaceShape.LType,
  },
  {
    label: 'dictionaries.space_shape.TType',
    icon: <UserIcon color="inherit" />,
    value: SpaceShape.TType,
  },
  {
    label: 'dictionaries.space_shape.UType',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: SpaceShape.UType,
  },
  {
    label: 'dictionaries.space_shape.ZType',
    icon: <LinkIcon color="inherit" />,
    value: SpaceShape.ZType,
  },
];

export const heating = [
  {
    label: 'dictionaries.space_service_heating.GeothermalHeat',
    icon: <SettingsIcon color="inherit" />,
    value: SpaceServiceHeating.GeothermalHeat,
  },
  {
    label: 'dictionaries.space_service_heating.NoHeating',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.NoHeating,
  },
  {
    label: 'dictionaries.space_service_heating.Fireplace',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: SpaceServiceHeating.Fireplace,
  },
  {
    label: 'dictionaries.space_service_heating.MultiBurner',
    icon: <UserIcon color="inherit" />,
    value: SpaceServiceHeating.MultiBurner,
  },
  {
    label: 'dictionaries.space_service_heating.HotAirHeating',
    icon: <FilterIcon color="inherit" />,
    value: SpaceServiceHeating.HotAirHeating,
  },
  {
    label: 'dictionaries.space_service_heating.PelletStove',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.PelletStove,
  },
  {
    label: 'dictionaries.space_service_heating.ElectricHeating',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.ElectricHeating,
  },
  {
    label: 'dictionaries.space_service_heating.DistrictHeating',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: SpaceServiceHeating.DistrictHeating,
  },
  {
    label: 'dictionaries.space_service_heating.GasFireplace',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.GasFireplace,
  },
  {
    label: 'dictionaries.space_service_heating.CoalStove',
    icon: <WarningIcon color="inherit" />,
    value: SpaceServiceHeating.CoalStove,
  },
  {
    label: 'dictionaries.space_service_heating.WallHeating',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.WallHeating,
  },
  {
    label: 'dictionaries.space_service_heating.HeatPump',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.HeatPump,
  },
  {
    label: 'dictionaries.space_service_heating.MotherFireplace',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.MotherFireplace,
  },
  {
    label: 'dictionaries.space_service_heating.GasHeaters',
    icon: <FilterIcon color="inherit" />,
    value: SpaceServiceHeating.GasHeaters,
  },
  {
    label: 'dictionaries.space_service_heating.BlockHeatingWoodStove',
    icon: <BuildingIcon color="inherit" />,
    value: SpaceServiceHeating.BlockHeatingWoodStove,
  },
  {
    label: 'dictionaries.space_service_heating.CentralHeatingBoiler',
    icon: <LinkIcon color="inherit" />,
    value: SpaceServiceHeating.CentralHeatingBoiler,
  },
  {
    label: 'dictionaries.space_service_heating.UnderfloorHeatingEntirely',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: SpaceServiceHeating.UnderfloorHeatingEntirely,
  },
  {
    label: 'dictionaries.space_service_heating.PossibilityForFireplaceHeat',
    icon: <UserIcon color="inherit" />,
    value: SpaceServiceHeating.PossibilityForFireplaceHeat,
  },
  {
    label: 'dictionaries.space_service_heating.UnderfloorHeatingPartly',
    icon: <SettingsIcon color="inherit" />,
    value: SpaceServiceHeating.UnderfloorHeatingPartly,
  },
  {
    label: 'dictionaries.space_service_heating.RecoveryInstalation',
    icon: <WarningIcon color="inherit" />,
    value: SpaceServiceHeating.RecoveryInstalation,
  },
];
