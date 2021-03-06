import React from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { useField } from 'react-final-form';
import { DateTime } from 'luxon';

import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { validatorsChain } from 'form/validators';
import { useLocale } from 'hooks/useLocale/useLocale';
import { timeValidator } from '../../validators/timeValidator/timeValidator';

import { TimePickerFieldProps } from './TimePickerField.types';
import { useStyles } from './TimePickerField.styles';

export const TimePickerField = ({
  name,
  validate,
  validateFields,
  placeholder,
  label,
  helperText,
  ...props
}: TimePickerFieldProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const { input, meta } = useField<string | null>(name, {
    validate: validate ? validatorsChain(...validate, timeValidator) : timeValidator,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

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
      error={hasError}
      helperText={
        hasError
          ? formatMessage(meta.error || meta.submitError, { ...meta.error?.values, ...meta.submitError?.values })
          : helperText
      }
      placeholder={placeholder ? (formatMessage({ id: placeholder }) as string) : undefined}
      label={typeof label === 'string' ? (formatMessage({ id: label }) as string) : undefined}
      keyboardIcon={<CalendarIcon />}
      KeyboardButtonProps={{
        'aria-label': formatMessage({ id: 'time_picker.aria_label' }),
      }}
      DialogProps={{ className: classes.timePicker }}
      {...input}
      {...props}
      value={input.value ? DateTime.fromISO(input.value) : null}
    />
  );
};
