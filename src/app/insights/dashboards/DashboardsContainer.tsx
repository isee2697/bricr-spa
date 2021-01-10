import React, { useState } from 'react';
import { Layout } from 'react-grid-layout';

import { Dashboards } from './Dashboards';

export const DashboardsContainer = () => {
  const [cards, setCards] = useState<Layout[]>([
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
  ]);

  const handleAddNewCard = (newCard: Layout) => {
    setCards([...cards, { ...newCard, i: `${cards.length}`, isResizable: true }]);
  };

  return <Dashboards cards={cards} onAddNewCard={handleAddNewCard} />;
};
