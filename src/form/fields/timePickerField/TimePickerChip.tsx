import React, { useState } from 'react';
import { useField } from 'react-final-form';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { Chip } from 'ui/atoms';
import { TimePickerField } from 'form/fields/timePickerField/TimePickerField';
import { TimePickerFieldProps } from 'form/fields/timePickerField/TimePickerField.types';
import { useStyles } from 'form/fields/datePickerField/DatePickerChip.styles';

export const TimePickerChip = ({ name, className, ...props }: TimePickerFieldProps) => {
  const [open, setOpen] = useState(false);
  const { input, meta } = useField<string | null>(name, {});
  const classes = useStyles();

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  const displayDate = (input.value ? DateTime.fromISO(input.value) : DateTime.local()).toFormat('hh:mm a');

  return (
    <>
      <TimePickerField
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
