import { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { FieldValidator } from 'final-form';

export type ColorPickerFieldProps = Omit<OutlinedTextFieldProps, 'variant'> & {
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
  defaultColor?: string;
};
