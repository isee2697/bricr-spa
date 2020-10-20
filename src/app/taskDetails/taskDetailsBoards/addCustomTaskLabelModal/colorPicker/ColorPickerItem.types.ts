import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

export type ColorPickerItemProps = {
  selected: boolean;
  theme: IconSelectedTheme;
  onClick: VoidFunction;
};
