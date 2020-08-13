import React from 'react';

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

import { WorkflowSidebarGroup } from './workflowSidebar/WorkflowSidebar.types';
import { Trigger } from './Workflow.types';

export const triggersGroups: WorkflowSidebarGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        icon: <SearchIcon color="inherit" />,
        title: 'Make an appointment',
      },
      {
        icon: <UserIcon color="inherit" />,
        title: 'Different trigger',
      },
      {
        icon: <DashboardIcon color="inherit" />,
        title: 'Trigger 1',
      },
      {
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
        icon: <UploadIcon color="inherit" />,
        title: 'Send email',
      },
      {
        icon: <SaleIcon color="inherit" />,
        title: 'Action 1',
      },
      {
        icon: <ArrowDownIcon color="inherit" />,
        title: 'Action 2',
      },
      {
        icon: <SettingsIcon color="inherit" />,
        title: 'Action 3',
      },
    ],
  },
];

export const trigger: Trigger = {
  id: 't1234',
  title: 'Make an appointment',
  icon: <SearchIcon color="inherit" />,
  actions: [
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
  ],
};
