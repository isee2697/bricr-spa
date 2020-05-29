import { Space } from 'api/types';

export type SpaceFormProps = {
  isEditMode: boolean;
  fieldPrefix: string;
};

export type SpaceProps = {
  isEditMode: boolean;
  index: number;
  space: Space;
};
