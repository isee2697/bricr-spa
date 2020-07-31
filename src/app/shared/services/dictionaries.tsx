import React from 'react';

import {
  HotWaterSupplyType,
  HeatingSourceType,
  AdditionalServiceType,
  OwnershipType,
  HotWaterSupplyFuelType,
  MeterType,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const meterTypes = [
  {
    value: MeterType.Water,
    label: 'dictionaries.meter_type.Water',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: MeterType.Gas,
    label: 'dictionaries.meter_type.Gas',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: MeterType.Electric,
    label: 'dictionaries.meter_type.Electricity',
    icon: <SquareIcon color="inherit" />,
  },
];

export const hotWaterTypes = [
  {
    value: HotWaterSupplyType.CentralHeatingBoiler,
    label: 'dictionaries.service.hotwatersupplies.CentralHeatingBoiler',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.Boiler,
    label: 'dictionaries.service.hotwatersupplies.Boiler',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.Geyser,
    label: 'dictionaries.service.hotwatersupplies.Geyser',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: HotWaterSupplyType.SolarWaterHeater,
    label: 'dictionaries.service.hotwatersupplies.SolarWaterHeater',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
];

export const heatingTypes = [
  {
    value: HeatingSourceType.GeothermalHeat,
    label: 'dictionaries.service.heatingsources.Geothermalheat',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.Fireplace,
    label: 'dictionaries.service.heatingsources.Fireplace',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.AllBurner,
    label: 'dictionaries.service.heatingsources.AllBurner',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.PelletStove,
    label: 'dictionaries.service.heatingsources.PelletStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.BlockHeating,
    label: 'dictionaries.service.heatingsources.BlockHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.WoodStove,
    label: 'dictionaries.service.heatingsources.WoodStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.DistrictHeating,
    label: 'dictionaries.service.heatingsources.DistrictHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.CentralHeatingBoiler,
    label: 'dictionaries.service.heatingsources.CentralHeatingBoiler',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.CoalStove,
    label: 'dictionaries.service.heatingsources.CoalStove',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.PartialElectricHeating,
    label: 'dictionaries.service.heatingsources.PatrialElectricHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.GasHeaters,
    label: 'dictionaries.service.heatingsources.GasHeaters',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.HeatPump,
    label: 'dictionaries.service.heatingsources.HeatPump',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.HotAirHeating,
    label: 'dictionaries.service.heatingsources.HotAirHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.UnderfloorHeating,
    label: 'dictionaries.service.heatingsources.UnderfloorHeating',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.UnderfloorHeatingCompletely,
    label: 'dictionaries.service.heatingsources.UnderfloorHeatingCompletely',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: HeatingSourceType.WallHeating,
    label: 'dictionaries.service.heatingsources.WallHeating',
    icon: <SquareIcon color="inherit" />,
  },
];

export const additionalTypes = [
  {
    value: AdditionalServiceType.AirConditioning,
    label: 'dictionaries.service.additionalservices.AirConditioning',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.AlarmSystem,
    label: 'dictionaries.service.additionalservices.AlarmSystem',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.ExteriorSunProtection,
    label: 'dictionaries.service.additionalservices.ExteriorSunProtection',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.Skylight,
    label: 'dictionaries.service.additionalservices.Skylight',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.SateliteDish,
    label: 'dictionaries.service.additionalservices.SateliteDish',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SlidingDoor,
    label: 'dictionaries.service.additionalservices.SlidingDoor',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.CableTv,
    label: 'dictionaries.service.additionalservices.CableTv',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Windmill,
    label: 'dictionaries.service.additionalservices.Windmill',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SolarCollector,
    label: 'dictionaries.service.additionalservices.SolarCollector',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.SwimmingPool,
    label: 'dictionaries.service.additionalservices.SwimmingPool',
    icon: <SquareIcon color="inherit" />,
    hasOwnership: true,
  },
  {
    value: AdditionalServiceType.FrenchBalcony,
    label: 'dictionaries.service.additionalservices.FrencBalcony',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.MechanicalVentilation,
    label: 'dictionaries.service.additionalservices.MechanicalVentilation',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Elevator,
    label: 'dictionaries.service.additionalservices.Elevator',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Flue,
    label: 'dictionaries.service.additionalservices.Flue',
    icon: <SquareIcon color="inherit" />,
  },
  {
    value: AdditionalServiceType.Shutters,
    label: 'dictionaries.service.additionalservices.Shutters',
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
