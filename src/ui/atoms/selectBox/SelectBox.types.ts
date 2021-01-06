export type SelectBoxItem = {
  label: string | React.ReactElement;
  value: string | number;
  color?: string;
};

export type SelectBoxClasses = {
  input?: string;
  inputInner?: string;
  menu?: string;
  menuItem?: string;
  menuItemInner?: string;
  inputValue?: string;
};

export type SelectBoxProps = {
  title?: string;
  items: SelectBoxItem[];
  placeholder: string;
  disabled?: boolean;
  value?: string;
  align?: 'left' | 'center' | 'right';
  showSelected?: boolean;
  showBackDrop?: boolean;
  classes?: SelectBoxClasses;
  onChange: (value: string | number) => void;
};
