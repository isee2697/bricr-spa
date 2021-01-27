import React from 'react';
import { Layout } from 'react-grid-layout';

import { Dashboards } from './Dashboards';

export const DashboardsContainer = () => {
  const cards = [
    {
      i: 'new-1',
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-2',
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-3',
      x: 0,
      y: 2,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-4',
      x: 0,
      y: 3,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-5',
      x: 0,
      y: 4,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-6',
      x: 0,
      y: 5,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-7',
      x: 0,
      y: 6,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-8',
      x: 0,
      y: 7,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-9',
      x: 0,
      y: 8,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-10',
      x: 0,
      y: 9,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-11',
      x: 0,
      y: 10,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-12',
      x: 0,
      y: 11,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-13',
      x: 0,
      y: 12,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-14',
      x: 0,
      y: 13,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-15',
      x: 0,
      y: 14,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-16',
      x: 0,
      y: 15,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-17',
      x: 0,
      y: 16,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-18',
      x: 0,
      y: 17,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-19',
      x: 0,
      y: 18,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
    {
      i: 'new-20',
      x: 0,
      y: 19,
      w: 1,
      h: 1,
      maxW: 8,
      isResizable: true,
    },
  ];

  const handleUpdateLayout = (newLayout: Layout[]) => {
    // TODO: Save updated layout into db
  };

  return <Dashboards cards={cards} onUpdateLayout={handleUpdateLayout} />;
};
