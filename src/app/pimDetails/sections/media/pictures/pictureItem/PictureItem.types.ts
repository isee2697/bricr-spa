import { ReactNode } from 'react';

import { Picture } from 'app/pimDetails/sections/media/pictures/Pictures.types';

export type PictureItemProps = {
  picture: Picture;
  editing: boolean;
  checkbox: ReactNode;
  onSelect: () => void;
};
