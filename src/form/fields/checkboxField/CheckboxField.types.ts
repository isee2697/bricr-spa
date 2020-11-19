import { CheckboxProps } from '@material-ui/core/Checkbox';
import { FieldValidator } from 'final-form';
import { ReactNodeArray } from 'react';

export type CheckboxFieldProps = Omit<CheckboxProps, 'variant'> & {
  name: string;
  label?: string | ReactNodeArray;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
  validate?: FieldValidator<boolean>[];
  validateFields?: string[];
  containerClassName?: string;
};
