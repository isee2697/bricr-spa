type DropdownItem = {
  label: string;
  value: string;
};

export type DropdownProps = {
  items: DropdownItem[];
  placeholder: string;
  disabled?: boolean;
  value?: string;
  onChange: (value: string) => void;
};
