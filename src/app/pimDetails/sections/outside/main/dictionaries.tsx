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

export const qualities = [
  {
    label: 'dictionaries.outside_quality.Simple',
    icon: <LinkIcon color="inherit" />,
    value: 'simple',
  },
  {
    label: 'dictionaries.outside_quality.Normal',
    icon: <FilterIcon color="inherit" />,
    value: 'normal',
  },
  {
    label: 'dictionaries.outside_quality.Luxury',
    icon: <BuildingIcon color="inherit" />,
    value: 'luxury',
  },
  {
    label: 'dictionaries.outside_quality.Excellent',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'excellent',
  },
  {
    label: 'dictionaries.outside_quality.GoodToStickOut',
    icon: <UserIcon color="inherit" />,
    value: 'good_to_stick_out',
  },
  {
    label: 'dictionaries.outside_quality.Good',
    icon: <SettingsIcon color="inherit" />,
    value: 'good',
  },
  {
    label: 'dictionaries.outside_quality.ReasonableToGood',
    icon: <WarningIcon color="inherit" />,
    value: 'reasonable_good',
  },
  {
    label: 'dictionaries.outside_quality.Fair',
    icon: <LinkIcon color="inherit" />,
    value: 'fair',
  },
  {
    label: 'dictionaries.outside_quality.ModerateToFairRedelijik',
    icon: <FilterIcon color="inherit" />,
    value: 'moderate_to_fair',
  },
  {
    label: 'dictionaries.outside_quality.Moderate',
    icon: <BuildingIcon color="inherit" />,
    value: 'moderate',
  },
  {
    label: 'dictionaries.outside_quality.BadToModerate',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'bad_to_moderate',
  },
  {
    label: 'dictionaries.outside_quality.Bad',
    icon: <UserIcon color="inherit" />,
    value: 'bad',
  },
];

export const relatedItems = [
  {
    label: 'dictionaries.outside_items.Balcony',
    icon: <LinkIcon color="inherit" />,
    value: 'balcony',
  },
  {
    label: 'dictionaries.outside_items.Terrace',
    icon: <UserIcon color="inherit" />,
    value: 'terrace',
  },
  {
    label: 'dictionaries.outside_items.RoofTerrace',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'roof_terrace',
  },
  {
    label: 'dictionaries.outside_items.Porch',
    icon: <FilterIcon color="inherit" />,
    value: 'porch',
  },
];

export const roofTypes = [
  {
    label: 'dictionaries.outside_roof_types.TransverseRoof',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'transverse_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.ClassRoof',
    icon: <FilterIcon color="inherit" />,
    value: 'class_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.MansardRoof',
    icon: <LinkIcon color="inherit" />,
    value: 'mansard_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.FlatRoof',
    icon: <UserIcon color="inherit" />,
    value: 'flat_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.HippedRoof',
    icon: <LinkIcon color="inherit" />,
    value: 'hipped_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.TentRoof',
    icon: <WarningIcon color="inherit" />,
    value: 'tent_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.SaddleRoof',
    icon: <SettingsIcon color="inherit" />,
    value: 'saddle_roof',
  },
  {
    label: 'dictionaries.outside_roof_types.CompositeRoof',
    icon: <BuildingIcon color="inherit" />,
    value: 'composite_roof',
  },
];

export const roofMaterialTypes = [
  {
    label: 'dictionaries.outside_roof_materials.Asbestos',
    icon: <UserIcon color="inherit" />,
    value: 'asbestos',
  },
  {
    label: 'dictionaries.outside_roof_materials.BituminousRoofing',
    icon: <FilterIcon color="inherit" />,
    value: 'bituminous_roofing',
  },
  {
    label: 'dictionaries.outside_roof_materials.Plastic',
    icon: <LinkIcon color="inherit" />,
    value: 'plastic',
  },
  {
    label: 'dictionaries.outside_roof_materials.Slate',
    icon: <BuildingIcon color="inherit" />,
    value: 'slate',
  },
  {
    label: 'dictionaries.outside_roof_materials.Metal',
    icon: <WarningIcon color="inherit" />,
    value: 'metal',
  },
  {
    label: 'dictionaries.outside_roof_materials.Pans',
    icon: <LinkIcon color="inherit" />,
    value: 'pans',
  },
  {
    label: 'dictionaries.outside_roof_materials.Other',
    icon: <SettingsIcon color="inherit" />,
    value: 'other',
  },
];

export const roofInsulationTypes = [
  {
    label: 'dictionaries.outside_roof_insulations.SprayFoam',
    icon: <BuildingIcon color="inherit" />,
    value: 'spray_foam',
  },
  {
    label: 'dictionaries.outside_roof_insulations.RigidBoards',
    icon: <FilterIcon color="inherit" />,
    value: 'rigid_boards',
  },
  {
    label: 'dictionaries.outside_roof_insulations.BlanketOrMatting',
    icon: <UserIcon color="inherit" />,
    value: 'blanket_or_matting',
  },
  {
    label: 'dictionaries.outside_roof_insulations.GlassRock',
    icon: <LinkIcon color="inherit" />,
    value: 'glass_rock',
  },
  {
    label: 'dictionaries.outside_roof_insulations.MineralWool',
    icon: <WarningIcon color="inherit" />,
    value: 'mineral_wool',
  },
  {
    label: 'dictionaries.outside_roof_insulations.LooseFill',
    icon: <SettingsIcon color="inherit" />,
    value: 'loose_fill',
  },
  {
    label: 'dictionaries.outside_roof_insulations.StructuralPanels',
    icon: <LinkIcon color="inherit" />,
    value: 'structural_panels',
  },
];
