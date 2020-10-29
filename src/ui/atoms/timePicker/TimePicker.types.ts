import { KeyboardTimePickerProps } from '@material-ui/pickers';
import { FieldValidator } from 'final-form';

type FieldValue = string | null;

export type TimePickerProps = KeyboardTimePickerProps & {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
