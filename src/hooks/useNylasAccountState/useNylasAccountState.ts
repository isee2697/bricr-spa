import { useContext } from 'react';

import { NylasAccountStateContext } from 'context/nylasContext/nylasAccountContext/NylasAccountContext';
import { NylasAccountStateContextType } from 'context/nylasContext/nylasAccountContext/NylasAccountContext.types';

export const useNylasAccountState: () => NylasAccountStateContextType = () => {
  const context = useContext(NylasAccountStateContext);

  if (context === undefined) {
    throw new Error('useNylasAccountState must be used within an NylasAccountContextController');
  }

  return context;
};
