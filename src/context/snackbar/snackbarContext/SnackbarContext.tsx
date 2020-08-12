import { createContext } from 'react';

import { ModalContextType } from './SnackbarContext.types';

export const SnackbarContext = createContext<ModalContextType | undefined>(undefined);
