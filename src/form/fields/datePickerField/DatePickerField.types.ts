import { FieldValidator } from 'final-form';

import { DatePickerProps } from 'ui/atoms/datePicker/DatePicker.types';

type FieldValue = string | null;

export type DatePickerFieldProps = Omit<DatePickerProps, 'value' | 'onChange'> & {
  name: string;
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
};
