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
import { WorkflowSection } from './workflowSection/WorkflowSection.types';

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
  { id: 's1', title: 'Workflow section 1' },
  {
    id: 's2',
    title: 'Workflow section 2',
    trigger: {
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
  },
];
