export type ColorPickerModalProps = {
  isOpened: boolean;
  onClose: (value?: string | null) => void;
  initialColor: string;
};
