export type DropdownItem = {
  label: string;
  value: string | number;
};

export type DropdownProps = {
  items: DropdownItem[];
  placeholder: string;
  disabled?: boolean;
  value?: string;
  onChange: (value: string | number) => void;
};
