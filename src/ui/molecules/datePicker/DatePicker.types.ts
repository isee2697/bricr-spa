import { KeyboardDatePickerProps } from '@material-ui/pickers';

export type DatePickerProps = KeyboardDatePickerProps & {
  isYearPicker?: boolean;
};
