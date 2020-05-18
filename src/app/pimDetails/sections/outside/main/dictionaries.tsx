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
    label: 'pim_details.outside.main.simple',
    icon: <LinkIcon color="inherit" />,
    value: 'simple',
  },
  {
    label: 'pim_details.outside.main.normal',
    icon: <FilterIcon color="inherit" />,
    value: 'normal',
  },
  {
    label: 'pim_details.outside.main.luxury',
    icon: <BuildingIcon color="inherit" />,
    value: 'luxury',
  },
  {
    label: 'pim_details.outside.main.excellent',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'excellent',
  },
  {
    label: 'pim_details.outside.main.good_to_stick_out',
    icon: <UserIcon color="inherit" />,
    value: 'good_to_stick_out',
  },
  {
    label: 'pim_details.outside.main.good',
    icon: <SettingsIcon color="inherit" />,
    value: 'good',
  },
  {
    label: 'pim_details.outside.main.reasonable_good',
    icon: <WarningIcon color="inherit" />,
    value: 'reasonable_good',
  },
  {
    label: 'pim_details.outside.main.fair',
    icon: <LinkIcon color="inherit" />,
    value: 'fair',
  },
  {
    label: 'pim_details.outside.main.moderate_to_fair',
    icon: <FilterIcon color="inherit" />,
    value: 'moderate_to_fair',
  },
  {
    label: 'pim_details.outside.main.moderate',
    icon: <BuildingIcon color="inherit" />,
    value: 'moderate',
  },
  {
    label: 'pim_details.outside.main.bad_to_moderate',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'bad_to_moderate',
  },
  {
    label: 'pim_details.outside.main.bad',
    icon: <UserIcon color="inherit" />,
    value: 'bad',
  },
];

export const relatedItems = [
  {
    label: 'pim_details.outside.main.balcony',
    icon: <LinkIcon color="inherit" />,
    value: 'balcony',
  },
  {
    label: 'pim_details.outside.main.terrace',
    icon: <UserIcon color="inherit" />,
    value: 'terrace',
  },
  {
    label: 'pim_details.outside.main.roof_terrace',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'roof_terrace',
  },
  {
    label: 'pim_details.outside.main.porch',
    icon: <FilterIcon color="inherit" />,
    value: 'porch',
  },
];

export const roofTypes = [
  {
    label: 'pim_details.outside.main.transverse_roof',
    icon: <ComplexBuildingIcon color="inherit" />,
    value: 'transverse_roof',
  },
  {
    label: 'pim_details.outside.main.class_roof',
    icon: <FilterIcon color="inherit" />,
    value: 'class_roof',
  },
  {
    label: 'pim_details.outside.main.mansard_roof',
    icon: <LinkIcon color="inherit" />,
    value: 'mansard_roof',
  },
  {
    label: 'pim_details.outside.main.flat_roof',
    icon: <UserIcon color="inherit" />,
    value: 'flat_roof',
  },
  {
    label: 'pim_details.outside.main.hipped_roof',
    icon: <LinkIcon color="inherit" />,
    value: 'hipped_roof',
  },
  {
    label: 'pim_details.outside.main.tent_roof',
    icon: <WarningIcon color="inherit" />,
    value: 'tent_roof',
  },
  {
    label: 'pim_details.outside.main.saddle_roof',
    icon: <SettingsIcon color="inherit" />,
    value: 'saddle_roof',
  },
  {
    label: 'pim_details.outside.main.composite_roof',
    icon: <BuildingIcon color="inherit" />,
    value: 'composite_roof',
  },
];

export const roofMaterialTypes = [
  {
    label: 'pim_details.outside.main.asbestos',
    icon: <UserIcon color="inherit" />,
    value: 'asbestos',
  },
  {
    label: 'pim_details.outside.main.bituminous_roofing',
    icon: <FilterIcon color="inherit" />,
    value: 'bituminous_roofing',
  },
  {
    label: 'pim_details.outside.main.plastic',
    icon: <LinkIcon color="inherit" />,
    value: 'plastic',
  },
  {
    label: 'pim_details.outside.main.slate',
    icon: <BuildingIcon color="inherit" />,
    value: 'slate',
  },
  {
    label: 'pim_details.outside.main.metal',
    icon: <WarningIcon color="inherit" />,
    value: 'metal',
  },
  {
    label: 'pim_details.outside.main.pans',
    icon: <LinkIcon color="inherit" />,
    value: 'pans',
  },
  {
    label: 'pim_details.outside.main.other',
    icon: <SettingsIcon color="inherit" />,
    value: 'other',
  },
];

export const roofInsulationTypes = [
  {
    label: 'pim_details.outside.main.spray_foam',
    icon: <BuildingIcon color="inherit" />,
    value: 'spray_foam',
  },
  {
    label: 'pim_details.outside.main.rigid_boards',
    icon: <FilterIcon color="inherit" />,
    value: 'rigid_boards',
  },
  {
    label: 'pim_details.outside.main.blanket_or_matting',
    icon: <UserIcon color="inherit" />,
    value: 'blanket_or_matting',
  },
  {
    label: 'pim_details.outside.main.glass_rock',
    icon: <LinkIcon color="inherit" />,
    value: 'glass_rock',
  },
  {
    label: 'pim_details.outside.main.mineral_wool',
    icon: <WarningIcon color="inherit" />,
    value: 'mineral_wool',
  },
  {
    label: 'pim_details.outside.main.loose_fill',
    icon: <SettingsIcon color="inherit" />,
    value: 'loose_fill',
  },
  {
    label: 'pim_details.outside.main.structural_panels',
    icon: <LinkIcon color="inherit" />,
    value: 'structural_panels',
  },
];
