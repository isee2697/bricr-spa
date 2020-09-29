import { FieldValidator } from 'final-form';
import { KeyboardTimePickerProps } from '@material-ui/pickers';

type FieldValue = string | null;

export type TimePickerFieldProps = Omit<KeyboardTimePickerProps, 'value' | 'onChange'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
