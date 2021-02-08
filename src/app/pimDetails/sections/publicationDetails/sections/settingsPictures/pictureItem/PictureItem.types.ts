import { SettingsPictureItem } from '../SettingsPictures.types';

export type PictureItemProps = SettingsPictureItem & {
  isAdded?: boolean;
  onRemoveFromList?: (item: SettingsPictureItem) => void;
};
