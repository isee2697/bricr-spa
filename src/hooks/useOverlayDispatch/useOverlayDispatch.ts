import { useContext } from 'react';

import { OverlayDispatchContextType } from 'context/overlay/overlayContext/OverlayContext.types';
import { OverlayDispatchContext } from 'context/overlay/overlayContext/OverlayContext';

export const useOverlayDispatch: () => OverlayDispatchContextType = () => {
  const context = useContext(OverlayDispatchContext);

  if (context === undefined) {
    throw new Error('useOverlayDispatch must be used within an OverlayContextController');
  }

  return context;
};
