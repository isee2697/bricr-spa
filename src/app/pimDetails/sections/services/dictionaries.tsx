import React from 'react';

import {
  HotWaterSupplyType,
  HeatingSourceType,
  AdditionalServiceType,
  OwnershipType,
  HotWaterSupplyFuelType,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const hotWaterTypes = [
  {
    value: HotWaterSupplyType.CentralHeatingBoiler,
    label: 'dictionaries.service.hotWater.CentralHeatingBoiler',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.Boiler,
    label: 'dictionaries.service.hotWater.Boiler',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.Geyser,
    label: 'dictionaries.service.hotWater.Geyser',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.SolarWaterHeater,
    label: 'dictionaries.service.hotWater.SolarWaterHeater',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
];

export const heatingTypes = [
  {
    value: HeatingSourceType.GeothermalHeat,
    label: 'dictionaries.service.heating.Geothermalheat',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.Fireplace,
    label: 'dictionaries.service.heating.Fireplace',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.AllBurner,
    label: 'dictionaries.service.heating.AllBurner',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.PelletStove,
    label: 'dictionaries.service.heating.PelletStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.BlockHeating,
    label: 'dictionaries.service.heating.BlockHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.WoodStove,
    label: 'dictionaries.service.heating.WoodStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.DistrictHeating,
    label: 'dictionaries.service.heating.DistrictHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.CentralHeatingBoiler,
    label: 'dictionaries.service.heating.CentralHeatingBoiler',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.CoalStove,
    label: 'dictionaries.service.heating.CoalStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.PartialElectricHeating,
    label: 'dictionaries.service.heating.PatrialElectricHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.GasHeaters,
    label: 'dictionaries.service.heating.GasHeaters',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.HeatPump,
    label: 'dictionaries.service.heating.HeatPump',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.HotAirHeating,
    label: 'dictionaries.service.heating.HotAirHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.UnderfloorHeating,
    label: 'dictionaries.service.heating.UnderfloorHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.UnderfloorHeatingCompletely,
    label: 'dictionaries.service.heating.UnderfloorHeatingCompletely',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.WallHeating,
    label: 'dictionaries.service.heating.WallHeating',
    icon: <SquareIcon color="inherit" />,
  },
];

export const additionalTypes = [
  {
    value: AdditionalServiceType.AirConditioning,
    label: 'dictionaries.service.additional.AirConditioning',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.AlarmSystem,
    label: 'dictionaries.service.additional.AlarmSystem',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.ExteriorSunProtection,
    label: 'dictionaries.service.additional.ExteriorSunProtection',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.Skylight,
    label: 'dictionaries.service.additional.Skylight',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.SateliteDish,
    label: 'dictionaries.service.additional.SatelightDish',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SlidingDoor,
    label: 'dictionaries.service.additional.SlidingDoor',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.CableTv,
    label: 'dictionaries.service.additional.CableTv',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Windmill,
    label: 'dictionaries.service.additional.WindMill',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SolarCollector,
    label: 'dictionaries.service.additional.SolarColectors',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SwimmingPool,
    label: 'dictionaries.service.additional.SwimmingPool',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.FrenchBalcony,
    label: 'dictionaries.service.additional.FrencBalcony',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.MechanicalVentilation,
    label: 'dictionaries.service.additional.MechanicalVentilation',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Elevator,
    label: 'dictionaries.service.additional.Elevator',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Flue,
    label: 'dictionaries.service.additional.Flue',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Shutters,
    label: 'dictionaries.service.additional.Shutters',
    icon: <SquareIcon color="inherit" />,
  },
];

export const onwershipTypes = [
  {
    value: OwnershipType.Rent,
    label: 'dictionaries.service.ownership.Rent',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: OwnershipType.Leased,
    label: 'dictionaries.service.ownership.Lease',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: OwnershipType.Owned,
    label: 'dictionaries.service.ownership.Sale',
    icon: <SquareIcon color="inherit" />,
  },
];

export const hotWaterFuelTypes = [
  {
    value: HotWaterSupplyFuelType.Gas,
    label: 'dictionaries.service.fuel.Gas',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HotWaterSupplyFuelType.Electric,
    label: 'dictionaries.service.fuel.Electric',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HotWaterSupplyFuelType.Oil,
    label: 'dictionaries.service.fuel.Oil',
    icon: <SquareIcon color="inherit" />,
  },
];
