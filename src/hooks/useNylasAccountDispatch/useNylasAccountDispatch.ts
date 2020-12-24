import { useContext } from 'react';

import { NylasAccountDispatchContextType } from 'context/nylasContext/nylasAccountContext/NylasAccountContext.types';
import { NylasAccountDispatchContext } from 'context/nylasContext/nylasAccountContext/NylasAccountContext';

export const useNylasAccountDispatch: () => NylasAccountDispatchContextType = () => {
  const context = useContext(NylasAccountDispatchContext);

  if (context === undefined) {
    throw new Error('useNylasAccountDispatch must be used within an NylasAccountContextController');
  }

  return context;
};
