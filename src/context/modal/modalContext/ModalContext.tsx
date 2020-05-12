import { createContext } from 'react';

import { ModalContextType } from './ModalContext.types';

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
