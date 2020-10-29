import { KeyboardDatePickerProps } from '@material-ui/pickers';
import { FieldValidator } from 'final-form';

type FieldValue = string | null;

export type DatePickerProps = KeyboardDatePickerProps & {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  isYearPicker?: boolean;
};
