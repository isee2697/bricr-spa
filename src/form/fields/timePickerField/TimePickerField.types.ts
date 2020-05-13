import { FieldValidator } from 'final-form';
import { KeyboardTimePickerProps } from '@material-ui/pickers';
import { DateTime } from 'luxon';

type FieldValue = DateTime | null;

export type TimePickerFieldProps = KeyboardTimePickerProps & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
