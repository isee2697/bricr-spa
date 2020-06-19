import React from 'react';

import {
  LinkIcon,
  FilterIcon,
  BuildingIcon,
  ComplexBuildingIcon,
  UserIcon,
  SettingsIcon,
  WarningIcon,
  SquareIcon,
  BellIcon,
} from 'ui/atoms/icons';
import { FoundationMaterialType, FoundationType, GutterMaterial, GutterType } from 'api/types';

export const qualities = [
  {
    label: 'dictionaries.outside_quality.Simple',
    icon: <LinkIcon color="inherit" />,
    value: 'Simple',
  },
  {
    label: 'dictionaries.outside_quality.Normal',
    icon: <FilterIcon color="inherit" />,
    value: 'Normal',
  },
  {
    label: 'dictionaries.outside_quality.Luxury',
    icon: <BuildingIcon color="inherit" />,
    value: 'Luxury',
  },
  {
    label: 'dictionaries.outside_quality.Excellent',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'Excellent',
  },
  {
    label: 'dictionaries.outside_quality.GoodToStickOut',
    icon: <UserIcon color="inherit" />,
    value: 'GoodToStickOut',
  },
  {
    label: 'dictionaries.outside_quality.Good',
    icon: <SettingsIcon color="inherit" />,
    value: 'Good',
  },
  {
    label: 'dictionaries.outside_quality.ReasonableToGood',
    icon: <WarningIcon color="inherit" />,
    value: 'ReasonableToGood',
  },
  {
    label: 'dictionaries.outside_quality.Fair',
    icon: <LinkIcon color="inherit" />,
    value: 'Fair',
  },
  {
    label: 'dictionaries.outside_quality.ModerateToFairRedelijik',
    icon: <FilterIcon color="inherit" />,
    value: 'ModerateToFairRedelijik',
  },
  {
    label: 'dictionaries.outside_quality.Moderate',
    icon: <BuildingIcon color="inherit" />,
    value: 'Moderate',
  },
  {
    label: 'dictionaries.outside_quality.BadToModerate',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'BadToModerate',
  },
  {
    label: 'dictionaries.outside_quality.Bad',
    icon: <UserIcon color="inherit" />,
    value: 'Bad',
  },
];

export const relatedItems = [
  {
    label: 'dictionaries.outside_items.Balcony',
    icon: <LinkIcon color="inherit" />,
    value: 'Balcony',
  },
  {
    label: 'dictionaries.outside_items.Terrace',
    icon: <UserIcon color="inherit" />,
    value: 'Terrace',
  },
  {
    label: 'dictionaries.outside_items.RoofTerrace',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'RoofTerrace',
  },
  {
    label: 'dictionaries.outside_items.Porch',
    icon: <FilterIcon color="inherit" />,
    value: 'Porch',
  },
];

export const roofTypes = [
  {
    label: 'dictionaries.outside_roof_types.TransverseRoof',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'TransverseRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.ClassRoof',
    icon: <FilterIcon color="inherit" />,
    value: 'ClassRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.MansardRoof',
    icon: <LinkIcon color="inherit" />,
    value: 'MansardRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.FlatRoof',
    icon: <UserIcon color="inherit" />,
    value: 'FlatRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.HippedRoof',
    icon: <LinkIcon color="inherit" />,
    value: 'HippedRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.TentRoof',
    icon: <WarningIcon color="inherit" />,
    value: 'TentRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.SaddleRoof',
    icon: <SettingsIcon color="inherit" />,
    value: 'SaddleRoof',
  },
  {
    label: 'dictionaries.outside_roof_types.CompositeRoof',
    icon: <BuildingIcon color="inherit" />,
    value: 'CompositeRoof',
  },
];

export const roofMaterials = [
  {
    label: 'dictionaries.outside_roof_materials.Asbestos',
    icon: <UserIcon color="inherit" />,
    value: 'Asbestos',
  },
  {
    label: 'dictionaries.outside_roof_materials.BituminousRoofing',
    icon: <FilterIcon color="inherit" />,
    value: 'BituminousRoofing',
  },
  {
    label: 'dictionaries.outside_roof_materials.Plastic',
    icon: <LinkIcon color="inherit" />,
    value: 'Plastic',
  },
  {
    label: 'dictionaries.outside_roof_materials.Slate',
    icon: <BuildingIcon color="inherit" />,
    value: 'Slate',
  },
  {
    label: 'dictionaries.outside_roof_materials.Metal',
    icon: <WarningIcon color="inherit" />,
    value: 'Metal',
  },
  {
    label: 'dictionaries.outside_roof_materials.Pans',
    icon: <LinkIcon color="inherit" />,
    value: 'Pans',
  },
  {
    label: 'dictionaries.outside_roof_materials.Other',
    icon: <SettingsIcon color="inherit" />,
    value: 'Other',
  },
];

export const foundations = [
  {
    label: 'dictionaries.outside_foundation_type.IsolatedFooting',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.IsolatedFooting,
  },
  {
    label: 'dictionaries.outside_foundation_type.CombinedFooting',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.CombinedFooting,
  },
  {
    label: 'dictionaries.outside_foundation_type.WallFooting',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.WallFooting,
  },
  {
    label: 'dictionaries.outside_foundation_type.SpreadFooting',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.SpreadLooting,
  },
  {
    label: 'dictionaries.outside_foundation_type.RaftOrMatFoundations',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.RaftOrMatFoundations,
  },
  {
    label: 'dictionaries.outside_foundation_type.PileFoundations',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.PileFoundations,
  },
  {
    label: 'dictionaries.outside_foundation_type.DrilledShafts',
    icon: <SquareIcon color="inherit" />,
    value: FoundationType.DrilledShafts,
  },
];

export const foundationMaterials = [
  {
    label: 'dictionaries.outside_foundation_material.Concrete',
    icon: <SquareIcon color="inherit" />,
    value: FoundationMaterialType.Concrete,
  },
  {
    label: 'dictionaries.outside_foundation_material.Timber',
    icon: <SquareIcon color="inherit" />,
    value: FoundationMaterialType.Timber,
  },
  {
    label: 'dictionaries.outside_foundation_material.Steel',
    icon: <SquareIcon color="inherit" />,
    value: FoundationMaterialType.Steel,
  },
  {
    label: 'dictionaries.outside_foundation_material.Plastic',
    icon: <SquareIcon color="inherit" />,
    value: FoundationMaterialType.Plastic,
  },
];

export const typesOfGutter = [
  {
    label: 'dictionaries.outside_roof_gutters.HalfRound',
    icon: <SquareIcon color="inherit" />,
    value: GutterType.HalfRound,
  },
  {
    label: 'dictionaries.outside_roof_gutters.Flatbottom',
    icon: <SquareIcon color="inherit" />,
    value: GutterType.Flatbottom,
  },
  {
    label: 'dictionaries.outside_roof_gutters.NoGutter',
    icon: <SquareIcon color="inherit" />,
    value: GutterType.NoGutter,
  },
];

export const gutterMaterials = [
  {
    label: 'dictionaries.outside_roof_gutters_materials.Vinyl',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Vinyl,
  },
  {
    label: 'dictionaries.outside_roof_gutters_materials.Stainless',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Stainless,
  },
  {
    label: 'dictionaries.outside_roof_gutters_materials.Aluminium',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Aluminium,
  },
  {
    label: 'dictionaries.outside_roof_gutters_materials.Copper',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Copper,
  },
  {
    label: 'dictionaries.outside_roof_gutters_materials.Zinc',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Zinc,
  },
  {
    label: 'dictionaries.outside_roof_gutters_materials.Steel',
    icon: <BellIcon color="inherit" />,
    value: GutterMaterial.Steel,
  },
];

export const roofInsulations = [
  {
    label: 'dictionaries.outside_roof_insulations.SprayFoam',
    icon: <BuildingIcon color="inherit" />,
    value: 'SprayFoam',
  },
  {
    label: 'dictionaries.outside_roof_insulations.RigidBoards',
    icon: <FilterIcon color="inherit" />,
    value: 'RigidBoards',
  },
  {
    label: 'dictionaries.outside_roof_insulations.BlanketOrMatting',
    icon: <UserIcon color="inherit" />,
    value: 'BlanketOrMatting',
  },
  {
    label: 'dictionaries.outside_roof_insulations.GlassRock',
    icon: <LinkIcon color="inherit" />,
    value: 'GlassRock',
  },
  {
    label: 'dictionaries.outside_roof_insulations.MineralWool',
    icon: <WarningIcon color="inherit" />,
    value: 'MineralWool',
  },
  {
    label: 'dictionaries.outside_roof_insulations.LooseFill',
    icon: <SettingsIcon color="inherit" />,
    value: 'LooseFill',
  },
  {
    label: 'dictionaries.outside_roof_insulations.StructuralPanels',
    icon: <LinkIcon color="inherit" />,
    value: 'StructuralPanels',
  },
];
