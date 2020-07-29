import React, { useRef, useState } from 'react';
import { useField } from 'react-final-form';
import classNames from 'classnames';

import { TextField as Field, FormHelperText, InputLabel, FormControl, Grid } from 'ui/atoms';
import { SelectCard } from 'ui/molecules';
import { useLocale } from 'hooks';
import { validatorsChain } from 'form/validators';

import { CardFieldProps } from './CardField.types';
import { useStyles } from './CardField.styles';

export const CardField = ({
  label,
  validate,
  name,
  validateFields,
  placeholder,
  helperText,
  inputProps,
  disabled,
  error,
  ...props
}: CardFieldProps) => {
  const { formatMessage } = useLocale();
  const [hasFocus, setFocus] = useState(false);
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  const focusInput = () => !disabled && !!inputRef && inputRef.current && inputRef.current.focus();

  return (
    <FormControl hiddenLabel={!label} margin="normal" fullWidth>
      <InputLabel
        shrink
        variant="outlined"
        color="primary"
        disabled={disabled}
        focused={hasFocus}
        error={hasError}
        htmlFor={name}
      >
        {typeof label === 'string' ? (formatMessage({ id: label }) as string) : label}
      </InputLabel>
      <SelectCard
        onClick={focusInput}
        className={classNames(
          classes.root,
          hasFocus && classes.focus,
          (hasError || error) && classes.error,
          disabled && classes.disabled,
        )}
      >
        <Grid container justify="center" alignItems="center">
          <Field
            className={classes.input}
            id={name}
            error={hasError}
            inputProps={{
              ...inputProps,
              onBlur: () => setFocus(false),
              onFocus: () => setFocus(true),
              ref: inputRef,
            }}
            disabled={disabled}
            {...input}
            {...props}
          />
        </Grid>
      </SelectCard>
      <FormHelperText error={error || hasError}>
        {hasError
          ? formatMessage(meta.error || meta.submitError, { ...meta.error?.values, ...meta.submitError?.values })
          : helperText}
      </FormHelperText>
    </FormControl>
  );
};
