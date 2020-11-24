import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DatePickerProps } from './DatePicker.types';

export const DatePicker = ({ placeholder, label, isYearPicker = false, ...props }: DatePickerProps) => {
  const { formatMessage } = useLocale();

  return (
    <KeyboardDatePicker
      views={isYearPicker ? ['year'] : undefined}
      disableToolbar
      variant="dialog"
      format={isYearPicker ? 'yyyy' : 'MM-dd-yyyy'}
      margin="normal"
      inputVariant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      placeholder={placeholder ? (formatMessage({ id: placeholder }) as string) : undefined}
      label={typeof label === 'string' ? (formatMessage({ id: label }) as string) : undefined}
      keyboardIcon={<CalendarIcon />}
      KeyboardButtonProps={{
        'aria-label': formatMessage({ id: 'date_picker.aria_label' }),
      }}
      {...props}
    />
  );
};
