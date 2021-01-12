import React from 'react';

import { SearchIcon, UserIcon, ChartIcon } from 'ui/atoms/icons';
import { DatasourceGroup } from '../datasourceSidebar/DatasourceSidebar.types';

export const DATASOURCE_GROUPS: DatasourceGroup[] = [
  {
    title: 'Group 1',
    items: [
      {
        id: 'name',
        title: 'Name',
        icon: <SearchIcon />,
      },
      {
        id: 'birthday',
        title: 'Birthday',
        icon: <UserIcon />,
      },
      {
        id: 'gender',
        title: 'Gender',
        icon: <ChartIcon />,
      },
      {
        id: 'data1',
        title: 'Data 1',
        icon: <ChartIcon />,
      },
    ],
  },
  {
    title: 'Group 2',
    items: [
      {
        id: 'data2',
        title: 'Data 2',
        icon: <SearchIcon />,
      },
      {
        id: 'data3',
        title: 'Data 3',
        icon: <UserIcon />,
      },
      {
        id: 'data4',
        title: 'Data 4',
        icon: <ChartIcon />,
      },
      {
        id: 'data5',
        title: 'Data 5',
        icon: <ChartIcon />,
      },
    ],
  },
];
