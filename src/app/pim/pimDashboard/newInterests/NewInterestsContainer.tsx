import { DateTime } from 'luxon';
import React from 'react';

import { NewInterests } from './NewInterests';
import { NewInterestsItem } from './NewInterests.types';

export const NewInterestsContainer = () => {
  const data: NewInterestsItem[] = [
    {
      id: 1,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Duivenbodekade 112. Soetserberg',
      interests: 5,
      date: DateTime.local(),
    },
    {
      id: 2,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Haagweg 12, Brunsum',
      interests: 5,
      date: DateTime.local(),
    },
    {
      id: 3,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Magdaleneplein 56 bis, Groning...',
      interests: 5,
      date: DateTime.local(),
    },
    {
      id: 4,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Teteringsedijk 144, Nuenen',
      interests: 5,
      date: DateTime.local(),
    },
    {
      id: 5,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Waterlooplein 99, Vlaardingen',
      interests: 5,
      date: DateTime.local(),
    },
    {
      id: 6,
      image: 'http://placeimg.com/50/40/arch',
      address: 'Hoge hil straat 69, Almelo',
      interests: 5,
      date: DateTime.local(),
    },
  ];

  return <NewInterests items={data} />;
};
