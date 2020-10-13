import React from 'react';
import { EntityTypeContext } from '../entityTypeContext/EntityTypeContext';

import { EntityTypeProviderProps } from './EntityTypeProvider.types';

export const EntityTypeProvider = ({ entityType, children }: EntityTypeProviderProps) => {
  return <EntityTypeContext.Provider value={entityType}>{children}</EntityTypeContext.Provider>;
};
