import React from 'react';

import { useAuthState, usePages } from 'hooks';

import { DashboardVisitedPages } from './DashboardVisitedPages';

export const DashboardVisitedPagesContainer = () => {
  const { user } = useAuthState();
  const pages = usePages();

  return <DashboardVisitedPages pages={!!user?.id && pages[user.id] ? pages[user.id].reverse() : []} />;
};
