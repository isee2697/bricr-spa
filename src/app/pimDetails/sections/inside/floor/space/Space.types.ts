import { Space } from 'api/types';

export type SpaceFormProps = {
  isEditMode: boolean;
  id: string;
  fieldPrefix: string;
};

export type KitchenFormProps = {
  isEditMode: boolean;
  fieldPrefix: string;
};

export type SpaceProps = {
  isEditMode: boolean;
  index: number;
  space: Space;
};
