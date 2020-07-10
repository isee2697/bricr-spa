import React, { useState } from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks';
import { validatorsChain } from 'form/validators';
import { InputAdornment, TextField as BaseFormField } from 'ui/atoms';
import { ColorPickerModal } from 'form/fields/colorPickerField/colorPickerModal/ColorPickerModal';

import { ColorPickerFieldProps } from './ColorPickerField.types';
import { useStyles } from './ColorPickerField.styles';

export const ColorPickerField = ({
  label,
  validate,
  name,
  validateFields,
  placeholder,
  helperText,
  ...props
}: ColorPickerFieldProps) => {
  const { formatMessage } = useLocale();
  const [isColorPickerOpened, setColorPickerOpened] = useState(false);
  const classes = useStyles();

  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const handleOnClose = (value?: string | null) => {
    setColorPickerOpened(false);

    if (value) {
      input.onChange(value);
    }
  };

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  return (
    <>
      <BaseFormField
        helperText={
          hasError
            ? formatMessage(meta.error || meta.submitError, {
                ...meta.error?.values,
                ...meta.submitError?.values,
              })
            : helperText
        }
        label={typeof label === 'string' ? (formatMessage({ id: label }) as string) : label}
        placeholder={placeholder ? (formatMessage({ id: placeholder }) as string) : undefined}
        id={name}
        margin="normal"
        variant="outlined"
        error={hasError}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <div className={classes.colorCircle} style={{ backgroundColor: input.value || 'transparent' }} />
            </InputAdornment>
          ),
        }}
        onClick={() => setColorPickerOpened(true)}
        {...input}
        {...props}
      />

      <ColorPickerModal isOpened={isColorPickerOpened} onClose={handleOnClose} initialColor={input.value} />
    </>
  );
};
