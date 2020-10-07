import React, { useState } from 'react';
import { ModalContext } from '../modalContext/ModalContext';
import { ModalStateType } from '../modalContext/ModalContext.types';

import { ModalContextControllerProps } from './ModalContextController.types';

export const ModalContextController = ({ children }: ModalContextControllerProps) => {
  const [modalsState, setModalsState] = useState<ModalStateType[]>([]);

  return <ModalContext.Provider value={{ modalsState, setModalsState }}>{children}</ModalContext.Provider>;
};
