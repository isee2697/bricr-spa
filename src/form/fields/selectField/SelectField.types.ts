import { SelectProps } from '@material-ui/core/Select';

import { FieldValidator } from 'final-form';

type FieldValue = string | number;

export type SelectFieldProps = Omit<SelectProps, 'variant'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
