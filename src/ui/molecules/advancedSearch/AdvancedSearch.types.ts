export type AdvancedSearchItem = {
  label: string;
  value: string | number;
  icon?: React.ReactElement;
  color?: string;
};

export type AdvancedSearchClasses = {
  input?: string;
  inputInner?: string;
  menu?: string;
  menuItem?: string;
  menuItemInner?: string;
};

export type AdvancedSearchProps = {
  title?: string;
  items: AdvancedSearchItem[];
  placeholder: string;
  disabled?: boolean;
  value?: string;
  align?: 'left' | 'center' | 'right';
  showSelected?: boolean;
  classes?: AdvancedSearchClasses;
  onChange: (value: string | number) => void;
};
