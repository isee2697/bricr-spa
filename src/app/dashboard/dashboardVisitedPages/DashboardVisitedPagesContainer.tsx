import React from 'react';

import { DashboardVisitedPages } from './DashboardVisitedPages';

// @TODO - replace with real data
const mockData = [
  {
    category: 'PIM',
    subCategory: 'Sale',
    name: 'Weerschijnvlinder 8: Prijzen',
  },
  {
    category: 'CRM',
    subCategory: 'RELATIES',
    name: 'C.G.M. van Gils: Documenten',
  },
  {
    category: 'CRM',
    subCategory: 'RELATIES',
    name: 'T. Wiegersma: EMF-Profiel',
  },
  {
    category: 'CRM',
    subCategory: 'RELATIES',
    name: 'P. Pietersen Tijdlin',
  },
  {
    category: 'PIM',
    subCategory: 'Sale',
    name: 'C.G.M. van Gils: Documenten #2',
  },
];

export const DashboardVisitedPagesContainer = () => <DashboardVisitedPages pages={mockData} />;
