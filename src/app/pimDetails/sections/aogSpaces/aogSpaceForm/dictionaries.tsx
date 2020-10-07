import React from 'react';

import {
  AnimalsType,
  BuildingType,
  InstallationsType,
  LooseGroundType,
  AogSoilType,
  CultivationTypes,
  FenceTypes,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const ANIMAL_TYPES = Object.keys(AnimalsType).map(type => ({
  value: type,
  label: `dictionaries.animals.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const BUILDING_TYPES = Object.keys(BuildingType).map(type => ({
  value: type,
  label: `dictionaries.aog_details.building_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const INSTALLATION_TYPES = Object.keys(InstallationsType).map(type => ({
  value: type,
  label: `dictionaries.installationtype.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const GROUND_TYPES = Object.keys(LooseGroundType).map(type => ({
  value: type,
  label: `dictionaries.aog_details.ground_types.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const SOIL_TYPES = Object.keys(AogSoilType).map(type => ({
  value: type,
  label: `dictionaries.soil_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const CULTIVATION_TYPES = Object.keys(CultivationTypes).map(type => ({
  value: type,
  label: `dictionaries.aog_details.ground_cultivation.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const FENCE_TYPES = Object.keys(FenceTypes).map(type => ({
  value: type,
  label: `dictionaries.aog_details.fence_types.${type}`,
  icon: <SquareIcon color="inherit" />,
}));
