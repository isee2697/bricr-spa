import { CheckboxProps } from '@material-ui/core/Checkbox';
import { FieldValidator } from 'final-form';

export type CheckboxFieldProps = Omit<CheckboxProps, 'variant'> & {
  name: string;
  label?: string;
  validate?: FieldValidator<boolean>[];
  validateFields?: string[];
  containerClassName?: string;
};
