import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

export type ColorPickerProps = {
  selectedTheme: IconSelectedTheme;
  onChangeTheme: (theme: IconSelectedTheme) => void;
};
