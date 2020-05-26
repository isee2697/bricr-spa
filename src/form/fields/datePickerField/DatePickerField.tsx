import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useField } from 'react-final-form';
import { DateTime } from 'luxon';

import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { validatorsChain } from 'form/validators';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DatePickerFieldProps } from './DatePickerField.types';

export const DatePickerField = ({
  name,
  validate,
  validateFields,
  placeholder,
  label,
  helperText,
  ...props
}: DatePickerFieldProps) => {
  const { formatMessage } = useLocale();

  const { input, meta } = useField<DateTime>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <KeyboardDatePicker
      disableToolbar
      variant="dialog"
      format="MM-dd-yyyy"
      margin="normal"
      inputVariant="outlined"
      size="small"
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
        'aria-label': formatMessage({ id: 'date_picker.aria_label' }),
      }}
      {...input}
      {...props}
    />
  );
};
