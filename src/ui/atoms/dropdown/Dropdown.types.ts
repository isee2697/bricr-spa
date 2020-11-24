export type DropdownItem = {
  label: string | React.ReactElement;
  value: string | number;
};

export type DropdownProps = {
  items: DropdownItem[];
  placeholder: string;
  disabled?: boolean;
  value?: string;
  align?: 'left' | 'center' | 'right';
  onChange: (value: string | number) => void;
};
