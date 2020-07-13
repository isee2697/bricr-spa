import { Space } from 'api/types';

export type AliasedSpace = {
  kitchenType: string;
  livingRoomType: string;
  kitchenServices: string;
  bathroomServices: string;
};

export type SpaceFormProps = {
  isEditMode: boolean;
  fieldPrefix: string;
};

export type CommonFormProps = SpaceFormProps & {
  id: string;
  onDimensionChange: (field: string) => void;
};

export type SpaceContainerProps = {
  isEditMode: boolean;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  index: number;
  space: Space;
  groupedSpaceCount?: number;
};

export type SpaceProps = SpaceContainerProps & {
  onDimensionChange: (field: string) => void;
};
