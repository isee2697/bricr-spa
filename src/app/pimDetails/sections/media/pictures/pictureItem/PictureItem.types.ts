import { ReactNode } from 'react';

import { Picture } from 'api/types';

export type PictureItemProps = {
  picture: Picture;
  editing: boolean;
  checkbox: ReactNode;
  onSelect: () => void;
};
