import { useContext } from 'react';

import { OverlayStateContextType } from 'context/overlay/overlayContext/OverlayContext.types';
import { OverlayStateContext } from 'context/overlay/overlayContext/OverlayContext';

export const useOverlayState: () => OverlayStateContextType = () => {
  const context = useContext(OverlayStateContext);

  if (context === undefined) {
    throw new Error('useOverlayState must be used within an OverlayContextController');
  }

  return context;
};
