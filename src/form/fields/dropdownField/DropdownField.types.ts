import { FieldValidator } from 'final-form';

import { DropdownProps } from 'ui/atoms/dropdown/Dropdown.types';

export type DropdownFieldProps = Pick<DropdownProps, 'items' | 'placeholder' | 'disabled'> & {
  label: string;
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
};
