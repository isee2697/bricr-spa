import React from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, TileRadio, FormHelperText } from 'ui/atoms';
import { validatorsChain } from 'form/validators';

import { CheckboxButtonFieldProps } from './CheckboxButtonField.types';

export const CheckboxButtonField = ({
  name,
  disabled,
  option,
  validate,
  validateFields,
  spacing = 3,
  xs = 2,
  sm,
  md,
  lg,
  actionElement,
  justify,
  onChange,
}: CheckboxButtonFieldProps) => {
  const { formatMessage } = useLocale();
  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain<boolean>(...validate) : undefined,
    validateFields,
  });

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  const handleChange = () => {
    input.onChange(!input.value);

    onChange && onChange(!input.value);
  };

  return (
    <>
      <Grid container spacing={spacing} justify={justify}>
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <TileRadio
            onClick={handleChange}
            isSelected={!!input.value}
            title={formatMessage({ id: option.label })}
            isDisabled={disabled}
          >
            {option.icon}
          </TileRadio>
        </Grid>
        {actionElement && (
          <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            {actionElement}
          </Grid>
        )}
      </Grid>
      {hasError && (
        <FormHelperText error>
          {formatMessage(meta.error || meta.submitError, { ...meta.error?.values })}
        </FormHelperText>
      )}
    </>
  );
};
