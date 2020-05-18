import { FieldValidator } from 'final-form';
import { KeyboardDatePickerProps } from '@material-ui/pickers';
import { DateTime } from 'luxon';

type FieldValue = DateTime | null;

export type DatePickerFieldProps = Omit<KeyboardDatePickerProps, 'value' | 'onChange'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};