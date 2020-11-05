import React from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';

import { CalendarIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './TimePicker.styles';
import { TimePickerProps } from './TimePicker.types';

export const TimePicker = ({ placeholder, label, ...props }: TimePickerProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <KeyboardTimePicker
      className={classes.timePicker}
      disableToolbar
      variant="dialog"
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
        'aria-label': formatMessage({ id: 'time_picker.aria_label' }),
      }}
      DialogProps={{ className: classes.timePicker }}
      {...props}
    />
  );
};
