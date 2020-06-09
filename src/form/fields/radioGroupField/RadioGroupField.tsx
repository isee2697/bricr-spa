import React, { useCallback } from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, TileRadio, FormHelperText } from 'ui/atoms';
import { validatorsChain } from 'form/validators';

import { RadioDataType, RadioGroupFieldProps } from './RadioGroupField.types';

export const RadioGroupField = ({
  name,
  disabled,
  options,
  validate,
  validateFields,
  parse,
  format,
  spacing = 3,
  xs = 2,
  sm,
  md,
  lg,
  actionElement,
  justify,
}: RadioGroupFieldProps) => {
  const { formatMessage } = useLocale();
  const { input, meta } = useField<string>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
    parse: parse as (value: string) => string,
    format,
  });

  const handleClick = useCallback(
    (item: RadioDataType) => {
      if (input.value === item.value) {
        input.onChange('');
      } else {
        input.onChange(item.value);
      }
    },
    [input],
  );

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <>
      <Grid container spacing={spacing} justify={justify}>
        {options.map((item: RadioDataType) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} key={item.value}>
            <TileRadio
              onClick={() => handleClick(item)}
              isSelected={input.value === item.value}
              title={formatMessage({ id: item.label })}
              isDisabled={disabled}
            >
              {item.icon}
            </TileRadio>
          </Grid>
        ))}
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
