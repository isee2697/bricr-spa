import React, { useState } from 'react';

import { useModalDispatch } from 'hooks';

import { Signs } from './Signs';
import { Sign } from './Signs.types';

export const SignsContainer = () => {
  const [signs, setSigns] = useState<Sign[]>([]);
  const { close } = useModalDispatch();

  const handleAddSign = () => {
    setSigns([
      ...signs,
      {
        id: signs.length,
        key: 'Triangle',
      },
    ]);

    close('add-signs');
  };

  return <Signs onSubmit={handleAddSign} signs={signs} />;
};
