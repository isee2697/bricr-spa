import { createContext } from 'react';
import { EntityType } from '../EntityType.types';

export const EntityTypeContext = createContext<EntityType | undefined>(undefined);
