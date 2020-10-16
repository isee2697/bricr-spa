import React from 'react';
import EuroIcon from '@material-ui/icons/Euro';

import {
  NoteIcon,
  ListIcon,
  ArrowDownIcon,
  SearchIcon,
  UserIcon,
  DashboardIcon,
  SeeIcon,
  UploadIcon,
  SaleIcon,
  SettingsIcon,
} from 'ui/atoms/icons';
import { DevelopmentType, PricingType, PropertyType } from 'api/types';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { WorkflowSection } from './workflowSection/WorkflowSection.types';
import { Sizes, Types, TriggerConditionsTypes } from './workflowConditions/triggerConditions/TriggerConditions.types';

export const triggersGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        id: 't1',
        icon: <SearchIcon color="inherit" />,
        title: 'Make an appointment',
      },
      {
        id: 't2',
        icon: <UserIcon color="inherit" />,
        title: 'Different trigger',
      },
      {
        id: 't3',
        icon: <DashboardIcon color="inherit" />,
        title: 'Trigger 1',
      },
      {
        id: 't4',
        icon: <SeeIcon color="inherit" />,
        title: 'Trigger 2',
      },
    ],
  },
];

export const actionsGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        id: 'ase',
        icon: <UploadIcon color="inherit" />,
        title: 'Send email',
      },
      {
        id: 'a1',
        icon: <SaleIcon color="inherit" />,
        title: 'Action 1',
      },
      {
        id: 'a2',
        icon: <ArrowDownIcon color="inherit" />,
        title: 'Action 2',
      },
      {
        id: 'a3',
        icon: <SettingsIcon color="inherit" />,
        title: 'Action 3',
      },
    ],
  },
];

export const sections: WorkflowSection[] = [
  { id: 's1', title: 'Workflow section 1', startpoint: 'outside' },
  {
    id: 's2',
    title: 'Workflow section 2',
    startpoint: 'start',
    triggers: [
      {
        id: 't1234',
        title: 'Make an appointment',
        icon: <SearchIcon color="inherit" />,
        newActions: {
          id: 't1234-new',
          actions: [
            {
              id: 'a1234',
              title: 'Send email',
              icon: <UploadIcon color="inherit" />,
            },
            {
              id: 'a1234',
              title: 'Send email',
              icon: <UploadIcon color="inherit" />,
            },
            {
              id: 'a5678',
              title: 'Action 1',
              icon: <NoteIcon color="inherit" />,
              nextAction: {
                id: 'a0123',
                title: 'Action 3',
                icon: <ListIcon color="inherit" />,
              },
            },
            {
              id: 'a1234',
              title: 'Send email',
              icon: <UploadIcon color="inherit" />,
            },
            {
              id: 'a1234',
              title: 'Send email',
              icon: <UploadIcon color="inherit" />,
            },
          ],
        },
        deleteActions: { id: 't1234-delete' },
        updateActions: { id: 't1234-update' },
      },
    ],
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
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
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
