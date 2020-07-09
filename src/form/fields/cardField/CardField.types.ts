import { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { FieldValidator } from 'final-form';

type FieldValue = string | number;

export type CardFieldProps = Omit<OutlinedTextFieldProps, 'variant'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
