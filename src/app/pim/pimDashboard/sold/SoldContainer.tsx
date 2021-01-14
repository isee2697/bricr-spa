import React from 'react';

import { Sold } from './Sold';
import { SoldItem } from './Sold.types';

export const SoldContainer = () => {
  const data: SoldItem[] = [
    {
      id: 1,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Duivenbodekade 112. Soetserberg',
      price: 915000,
    },
    {
      id: 2,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Waterlooplein 99, Vlaardingen',
      price: 223000,
    },
    {
      id: 3,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Hoge hil straat 69, Almelo',
      price: 488000,
    },
  ];

  return <Sold items={data} />;
};
