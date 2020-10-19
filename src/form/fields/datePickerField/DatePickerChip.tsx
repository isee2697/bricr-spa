import React, { useState } from 'react';
import { useField } from 'react-final-form';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { Chip } from 'ui/atoms';
import { DatePickerFieldProps } from 'form/fields/datePickerField/DatePickerField.types';
import { DatePickerField } from 'form/fields/datePickerField/DatePickerField';

import { useStyles } from './DatePickerChip.styles';

export const DatePickerChip = ({ name, isYearPicker = false, className, ...props }: DatePickerFieldProps) => {
  const [open, setOpen] = useState(false);
  const { input, meta } = useField<string | null>(name, {});
  const classes = useStyles();

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  const displayDate = (input.value ? DateTime.fromISO(input.value) : DateTime.local()).toFormat(
    isYearPicker ? 'yyyy' : 'dd MMMM yyyy',
  );

  return (
    <>
      <DatePickerField
        {...props}
        className={classes.inputField}
        name={name}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Chip
        className={classNames(classes.chip, hasError && classes.error, className)}
        onClick={() => setOpen(true)}
        label={displayDate}
      />
    </>
  );
};
