import { SettingsPictureItem } from '../SettingsPictures.types';

export type PictureItemPlaceholderDragObject = {
  type: string;
  item: SettingsPictureItem;
};

export type PictureItemPlaceholderProps = {
  onAddItemToAddedList: (item: SettingsPictureItem) => void;
};
