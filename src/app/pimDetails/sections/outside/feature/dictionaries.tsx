import React from 'react';
import { LinkIcon, SquareIcon } from 'ui/atoms/icons';
import {
  GarageType,
  GarageAndStorageMaterial,
  GarageInsulation,
  GarageService,
  StorageType,
  StorageInsulation,
  StorageService,
  TerrainParking,
} from 'api/types';

export const gardenTypes = [
  {
    label: 'dictionaries.outside_garden_types.Backyard',
    icon: <LinkIcon color="inherit" />,
    value: 'Backyard',
  },
  {
    label: 'dictionaries.outside_garden_types.PatioAtrium',
    icon: <LinkIcon color="inherit" />,
    value: 'PatioOrAtrium',
  },
  {
    label: 'dictionaries.outside_garden_types.Place',
    icon: <LinkIcon color="inherit" />,
    value: 'Place',
  },
  {
    label: 'dictionaries.outside_garden_types.AllAroundGarden',
    icon: <LinkIcon color="inherit" />,
    value: 'AllGroundGarden',
  },
  {
    label: 'dictionaries.outside_garden_types.FrontGarden',
    icon: <LinkIcon color="inherit" />,
    value: 'FrontGarden',
  },
  {
    label: 'dictionaries.outside_garden_types.SunTerrace',
    icon: <LinkIcon color="inherit" />,
    value: 'SunTerrace',
  },
  {
    label: 'dictionaries.outside_garden_types.SideGarden',
    icon: <LinkIcon color="inherit" />,
    value: 'BackGarden',
  },
];

export const gardenLocations = [
  {
    label: 'dictionaries.location.North',
    icon: <LinkIcon color="inherit" />,
    value: 'North',
  },
  {
    label: 'dictionaries.location.East',
    icon: <LinkIcon color="inherit" />,
    value: 'South',
  },
  {
    label: 'dictionaries.location.South',
    icon: <LinkIcon color="inherit" />,
    value: 'East',
  },
  {
    label: 'dictionaries.location.West',
    icon: <LinkIcon color="inherit" />,
    value: 'West',
  },
];

export const gardenQualities = [
  {
    label: 'dictionaries.outside_garden_quality.ToBeConstructed',
    icon: <LinkIcon color="inherit" />,
    value: 'ToBeConstructed',
  },
  {
    label: 'dictionaries.outside_garden_quality.BeautifullyConstructed',
    icon: <LinkIcon color="inherit" />,
    value: 'BeautifullyConstructed',
  },
  {
    label: 'dictionaries.outside_garden_quality.Normal',
    icon: <LinkIcon color="inherit" />,
    value: 'Normal',
  },
  {
    label: 'dictionaries.outside_garden_quality.Neglected',
    icon: <LinkIcon color="inherit" />,
    value: 'Neglected',
  },
  {
    label: 'dictionaries.outside_garden_quality.TakenCareOf',
    icon: <LinkIcon color="inherit" />,
    value: 'TakenCareOf',
  },
];

export const gardenShapes = [
  {
    label: 'dictionaries.outside_garden_shape.Square',
    icon: <LinkIcon color="inherit" />,
    value: 'Square',
  },
  {
    label: 'dictionaries.outside_garden_shape.Rectangle',
    icon: <LinkIcon color="inherit" />,
    value: 'Rectangle',
  },
  {
    label: 'dictionaries.outside_garden_shape.LShape',
    icon: <LinkIcon color="inherit" />,
    value: 'LShape',
  },
  {
    label: 'dictionaries.outside_garden_shape.UShape',
    icon: <LinkIcon color="inherit" />,
    value: 'UShape',
  },
  {
    label: 'dictionaries.outside_garden_shape.TShape',
    icon: <LinkIcon color="inherit" />,
    value: 'TShape',
  },
];

export const garageTypes = Object.keys(GarageType).map(type => ({
  label: `dictionaries.outside_garage.type.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));

export const garageStorageMaterials = Object.keys(GarageAndStorageMaterial).map(material => ({
  label: `dictionaries.outside_garage.material.${material}`,
  icon: <SquareIcon color="inherit" />,
  value: material,
}));

export const garageInsulations = Object.keys(GarageInsulation).map(insulation => ({
  label: `dictionaries.outside_garage.insulation.${insulation}`,
  icon: <SquareIcon color="inherit" />,
  value: insulation,
}));

export const garageServices = Object.keys(GarageService).map(service => ({
  label: `dictionaries.outside_garage.service.${service}`,
  icon: <SquareIcon color="inherit" />,
  value: service,
}));

export const storageTypes = Object.keys(StorageType).map(type => ({
  label: `dictionaries.outside_storage.type.${type}`,
  icon: <SquareIcon color="inherit" />,
  value: type,
}));

export const storageInsulations = Object.keys(StorageInsulation)
  .filter(insulation => insulation !== StorageInsulation.NoInsulation)
  .map(insulation => ({
    label: `dictionaries.outside_storage.insulation.${insulation}`,
    icon: <SquareIcon color="inherit" />,
    value: insulation,
  }));

export const storageServices = Object.keys(StorageService).map(service => ({
  label: `dictionaries.outside_storage.service.${service}`,
  icon: <SquareIcon color="inherit" />,
  value: service,
}));

export const terrainParkings = Object.keys(TerrainParking).map(parking => ({
  label: `dictionaries.outside_terrain.parking.${parking}`,
  icon: <SquareIcon color="inherit" />,
  value: parking,
}));
