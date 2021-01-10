import React from 'react';

import { Dashboards } from './Dashboards';

export const DashboardsContainer = () => {
  const initialCards = [
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'b',
      x: 1,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'c',
      x: 2,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'd',
      x: 3,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'e',
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'f',
      x: 1,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'g',
      x: 2,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'h',
      x: 2,
      y: 2,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
  ];

  return <Dashboards cards={initialCards} />;
};
