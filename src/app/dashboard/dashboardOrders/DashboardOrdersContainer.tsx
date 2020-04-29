import React, { useState } from 'react';

import { DashboardOrders } from './DashboardOrders';

// @TODO - replace with real data
const mockData = [
  {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch',
    addressFirstLine: 'Isenburgstraat 36',
    addressSecondLine: 'C.G.M. van Gils 06-48764044',
    id: 'id123',
  },
  {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch?t=1',
    addressFirstLine: 'Nova Scotiaplein',
    addressSecondLine: 'I. de Bruin 040-9008663',
    id: 'id124',
  },
  {
    labels: ['Verkoop', 'Getekend'],
    price: 375500,
    packages: 3,
    image: 'http://placeimg.com/80/80/arch?t=2',
    addressFirstLine: 'Isenburgstraat 36',
    addressSecondLine: 'C.G.M. van Gils 06-48764044',
    id: 'id125',
  },
];

const tabs = ['Sale', 'Rent', 'Appraisal'];

export const DashboardOrdersContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return <DashboardOrders tabs={tabs} currentTab={selectedTab} onChangeTab={setSelectedTab} orders={mockData} />;
};
