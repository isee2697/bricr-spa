import { FieldValidator } from 'final-form';
import { KeyboardDatePickerProps } from '@material-ui/pickers';

type FieldValue = string | null;

export type DatePickerFieldProps = Omit<KeyboardDatePickerProps, 'value' | 'onChange'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  isYearPicker?: boolean;
};
