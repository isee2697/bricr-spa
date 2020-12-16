import React from 'react';

import { WorkflowActionType, WorkflowTriggerType } from 'api/types';
import {
  ArrowDownIcon,
  DashboardIcon,
  SaleIcon,
  SearchIcon,
  SeeIcon,
  SettingsIcon,
  UploadIcon,
  UserIcon,
} from 'ui/atoms/icons';

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
