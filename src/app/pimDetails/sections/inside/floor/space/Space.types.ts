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

export type SpaceProps = {
  isEditMode: boolean;
  isExpanded: boolean;
  onExpand: (id: string) => void;
  index: number;
  space: Space;
};
