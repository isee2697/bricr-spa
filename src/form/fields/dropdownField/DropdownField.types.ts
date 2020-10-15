import { FieldValidator } from 'final-form';
import { PropTypes } from '@material-ui/core';

import { DropdownProps } from 'ui/atoms/dropdown/Dropdown.types';

export type DropdownFieldProps = Pick<DropdownProps, 'items' | 'placeholder' | 'disabled' | 'align'> & {
  label: string;
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
  margin?: PropTypes.Margin;
  searchEnabled?: boolean;
};
