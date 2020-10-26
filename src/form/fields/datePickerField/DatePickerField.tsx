import React from 'react';
import { useField } from 'react-final-form';
import { DateTime } from 'luxon';

import { validatorsChain } from 'form/validators';
import { useLocale } from 'hooks/useLocale/useLocale';
import { dateValidator } from 'form/validators/dateValidator/dateValidator';
import { DatePicker } from 'ui/molecules';

import { DatePickerFieldProps } from './DatePickerField.types';

export const DatePickerField = ({
  name,
  validate,
  validateFields,
  placeholder,
  label,
  helperText,
  isYearPicker = false,
  ...props
}: DatePickerFieldProps) => {
  const { formatMessage } = useLocale();

  const { input, meta } = useField<string | null>(name, {
    validate: validate ? validatorsChain(...validate, dateValidator) : dateValidator,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <DatePicker
      error={hasError}
      helperText={
        hasError
          ? formatMessage(meta.error || meta.submitError, { ...meta.error?.values, ...meta.submitError?.values })
          : helperText
      }
      {...input}
      {...props}
      value={input.value ? DateTime.fromISO(input.value) : null}
    />
  );
};

export const dateToYear = (date?: DateTime | null) => {
  return !!date ? date.year : null;
};

export const yearToDate = (year?: number | null) => {
  return !!year ? DateTime.fromFormat(year.toString(), 'yyyy') : null;
};
