import React from 'react';

import { WorkflowActionType, WorkflowTriggerType } from 'api/types';
import {
  ArrowDownIcon,
  SearchIcon,
  UserIcon,
  DashboardIcon,
  SeeIcon,
  UploadIcon,
  SaleIcon,
  SettingsIcon,
} from 'ui/atoms/icons';

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';

export const triggersGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        id: WorkflowTriggerType.MakeAppointment,
        icon: <SearchIcon color="inherit" />,
        title: 'Make an appointment',
      },
      {
        id: WorkflowTriggerType.DifferentTrigger,
        icon: <UserIcon color="inherit" />,
        title: 'Different trigger',
      },
      {
        id: WorkflowTriggerType.PimPricingUpdated,
        icon: <SaleIcon color="inherit" />,
        title: 'Pim Price',
      },
      {
        id: WorkflowTriggerType.Trigger1,
        icon: <DashboardIcon color="inherit" />,
        title: 'Trigger 1',
      },
      {
        id: WorkflowTriggerType.Trigger2,
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
        id: WorkflowActionType.SendEmail,
        icon: <UploadIcon color="inherit" />,
        title: 'Send email',
      },
      {
        id: WorkflowActionType.Action1,
        icon: <SaleIcon color="inherit" />,
        title: 'Action 1',
      },
      {
        id: WorkflowActionType.Action2,
        icon: <ArrowDownIcon color="inherit" />,
        title: 'Action 2',
      },
      {
        id: WorkflowActionType.Action3,
        icon: <SettingsIcon color="inherit" />,
        title: 'Action 3',
      },
    ],
  },
];
