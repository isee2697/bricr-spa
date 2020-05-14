import React, { useCallback } from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, TileRadio, FormHelperText } from 'ui/atoms';
import { validatorsChain } from 'form/validators';

import { RadioDataType, RadioGroupFieldProps } from './RadioGroupField.types';

export const RadioGroupField = ({ name, options, validate, validateFields, width = 2 }: RadioGroupFieldProps) => {
  const { formatMessage } = useLocale();
  const { input, meta } = useField<string>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
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
      <Grid container spacing={3}>
        {options.map((item: RadioDataType) => (
          <Grid item xs={width} key={item.title}>
            <TileRadio onClick={() => handleClick(item)} isSelected={input.value === item.value} title={item.title}>
              {item.icon}
            </TileRadio>
          </Grid>
        ))}
      </Grid>
      {hasError && (
        <FormHelperText error>
          {formatMessage(meta.error || meta.submitError, { ...meta.error?.values })}
        </FormHelperText>
      )}
    </>
  );
};
