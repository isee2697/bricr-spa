import React from 'react';

import { DoorIcon, GraphIcon, SearchIcon, UserIcon } from 'ui/atoms/icons';

import { ContractTemplatesDetailsSidebarGroup } from './sidebar/Sidebar.types';

export const fieldsGroups: ContractTemplatesDetailsSidebarGroup[] = [
  {
    title: 'costs',
    items: [
      {
        id: 'serviceCosts',
        value: 'serviceCosts',
        icon: <SearchIcon color="inherit" />,
      },
      {
        id: 'deposit',
        value: 'deposit',
        icon: <UserIcon color="inherit" />,
      },
      {
        id: 'bankgarantie',
        value: 'bankgarantie',
        icon: <GraphIcon color="inherit" />,
      },
      {
        id: 'appointment',
        value: 'appointment',
        icon: <DoorIcon color="inherit" />,
      },
      {
        id: 'object',
        value: 'object',
        icon: <GraphIcon color="inherit" />,
      },
      {
        id: 'salesOrder',
        value: 'salesOrder',
        icon: <DoorIcon color="inherit" />,
      },
    ],
  },
  {
    title: 'extraArticles',
    items: [
      {
        id: 'exceptionalProvisions',
        value: 'exceptionalProvisions',
        icon: <SearchIcon color="inherit" />,
      },
      {
        id: 'parkingLot',
        value: 'parkingLot',
        icon: <UserIcon color="inherit" />,
      },
      {
        id: 'additionalServices',
        value: 'additionalServices',
        icon: <GraphIcon color="inherit" />,
      },
      {
        id: 'appointment',
        value: 'appointment',
        icon: <DoorIcon color="inherit" />,
      },
      {
        id: 'object',
        value: 'object',
        icon: <GraphIcon color="inherit" />,
      },
      {
        id: 'salesOrder',
        value: 'salesOrder',
        icon: <DoorIcon color="inherit" />,
      },
    ],
  },
];
