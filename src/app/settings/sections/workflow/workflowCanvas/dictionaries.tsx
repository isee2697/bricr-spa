import React from 'react';

import { DevelopmentType, PropertyType, WorkflowActionType, WorkflowTriggerType } from 'api/types';
import {
  ArrowDownIcon,
  BuildingIcon,
  DashboardIcon,
  EuroIcon,
  NewConstructionIcon,
  SaleIcon,
  SearchIcon,
  SeeIcon,
  SettingsIcon,
  UploadIcon,
  UserIcon,
} from 'ui/atoms/icons';
import { Sizes, TriggerConditionsTypes, Types } from '../workflowConditions/triggerConditions/TriggerConditions.types';

export const TriggerIcons = [
  {
    type: WorkflowTriggerType.MakeAppointment,
    icon: <SearchIcon color="inherit" />,
  },
  {
    type: WorkflowTriggerType.DifferentTrigger,
    icon: <UserIcon color="inherit" />,
  },
  {
    type: WorkflowTriggerType.PimPricingUpdated,
    icon: <SaleIcon color="inherit" />,
  },
  {
    type: WorkflowTriggerType.Trigger1,
    icon: <DashboardIcon color="inherit" />,
  },
  {
    type: WorkflowTriggerType.Trigger2,
    icon: <SeeIcon color="inherit" />,
  },
];

export const ActionIcons = [
  {
    type: WorkflowActionType.SendEmail,
    icon: <UploadIcon color="inherit" />,
  },
  {
    type: WorkflowActionType.Action1,
    icon: <SaleIcon color="inherit" />,
  },
  {
    type: WorkflowActionType.Action2,
    icon: <ArrowDownIcon color="inherit" />,
  },
  {
    type: WorkflowActionType.Action3,
    icon: <SettingsIcon color="inherit" />,
  },
];

export const generalConditionsTypes: TriggerConditionsTypes[] = [
  {
    key: 'trigger_type',
    type: Types.Criteria,
    size: Sizes.L,
    options: [
      { label: 'equal', value: 'equal', icon: <></> },
      { label: 'greater_than', value: 'greater_than', icon: <></> },
    ],
  },
  {
    key: 'origin_type',
    type: Types.Checkbox,
    size: Sizes.M,
    options: [
      {
        label: PropertyType.Apartment,
        value: PropertyType.Apartment,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.House,
        value: PropertyType.House,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.Commercial,
        value: PropertyType.Commercial,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.Agricultural,
        value: PropertyType.Agricultural,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.ParkingLot,
        value: PropertyType.ParkingLot,
        icon: <BuildingIcon />,
      },
      {
        label: PropertyType.BuildingPlot,
        value: PropertyType.BuildingPlot,
        icon: <BuildingIcon />,
      },
    ],
  },
  {
    key: 'time',
    type: Types.RadioButton,
    size: Sizes.L,
    options: [
      { label: 'Now', value: '0', icon: <EuroIcon /> },
      { label: '10 min', value: '600000', icon: <EuroIcon /> },
    ],
  },
  {
    key: 'other_type',
    type: Types.RadioButton,
    size: Sizes.M,
    options: [
      {
        label: DevelopmentType.New,
        value: DevelopmentType.New,
        icon: <NewConstructionIcon />,
      },
      {
        label: DevelopmentType.Existing,
        value: DevelopmentType.Existing,
        icon: <NewConstructionIcon />,
      },
    ],
  },
];
