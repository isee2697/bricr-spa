import { DateTime } from 'luxon';

export type DatePickerCalendarProps = {
  currentDate: DateTime;
  onChangeDate: (date?: DateTime | null) => void;
};
