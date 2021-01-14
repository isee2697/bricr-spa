import { DateTime } from 'luxon';
import React from 'react';

import { NewBiddings } from './NewBiddings';
import { NewBiddingsItem } from './NewBiddings.types';

export const NewBiddingsContainer = () => {
  const data: NewBiddingsItem[] = [
    {
      id: 1,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Duivenbodekade 112. Soetserberg',
      bidding: 915000,
      date: DateTime.local(),
    },
    {
      id: 2,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Waterlooplein 99, Vlaardingen',
      bidding: 223000,
      date: DateTime.local(),
    },
    {
      id: 3,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Hoge hil straat 69, Almelo',
      bidding: 488000,
      date: DateTime.local(),
    },
  ];

  return <NewBiddings items={data} />;
};
