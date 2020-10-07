import { ReactNode } from 'react';
import { EntityType } from '../EntityType.types';

export type EntityTypeProviderProps = {
  entityType: EntityType;
  children: ReactNode;
};
