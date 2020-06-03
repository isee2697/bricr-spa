type DropdownItem<T> = {
  label: string;
  value: T;
};

export type DropdownProps<T> = {
  items: DropdownItem<T>[];
  placeholder: string;
  disabled?: boolean;
  value?: T;
  onChange: (value: T) => void;
};
