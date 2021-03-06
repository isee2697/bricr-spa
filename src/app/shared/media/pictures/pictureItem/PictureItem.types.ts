import { ReactNode } from 'react';

import { Picture } from 'api/types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type PictureItemProps = {
  picture: Picture;
  editing: boolean;
  checkbox: ReactNode;
  onEdit: () => void;
  isSelected: boolean;
  customLabel?: RadioDataType;
};
