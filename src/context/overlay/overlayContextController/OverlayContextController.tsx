import React, { useState } from 'react';
import { OverlayDispatchContext, OverlayStateContext } from 'context/overlay/overlayContext/OverlayContext';

import { OverlayContextControllerProps } from './OverlayContextController.types';

export const OverlayContextController = ({ children }: OverlayContextControllerProps) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <OverlayStateContext.Provider value={isOpened}>
      <OverlayDispatchContext.Provider value={setOpened}>{children}</OverlayDispatchContext.Provider>
    </OverlayStateContext.Provider>
  );
};
