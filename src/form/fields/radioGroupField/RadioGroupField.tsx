import React, { useCallback, useRef } from 'react';
import { useField } from 'react-final-form';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useHighestElementHeight } from 'hooks/useHighestElementHeight/useHighestElementHeight';
import { Grid, TileRadio, FormHelperText, InputLabel, FormControlLabel, Typography, Radio } from 'ui/atoms';
import { validatorsChain } from 'form/validators';

import { RadioDataType, RadioGroupFieldProps } from './RadioGroupField.types';
import { useStyles } from './RadioGroupField.styles';

export const RadioGroupField = ({
  name,
  labelId,
  disabled,
  options,
  optionType = 'tile',
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
  onChange,
  classes: propsClasses,
  orientation,
}: RadioGroupFieldProps) => {
  const { formatMessage } = useLocale();
  const { input, meta } = useField<string>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
    parse: parse as (value: string) => string,
    format,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const tileHeight = useHighestElementHeight({ containerRef, options, minHeight: 123 });
  const classes = useStyles({ tileHeight });

  const handleClick = useCallback(
    (item: RadioDataType) => {
      if (input.value === item.value) {
        input.onChange('');
      } else {
        input.onChange(item.value);
      }

      if (onChange) {
        onChange(item);
      }
    },
    [input, onChange],
  );

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <div data-testid={name}>
      {labelId && (
        <InputLabel shrink variant="outlined" color="primary" htmlFor={name} disabled={disabled}>
          {formatMessage({ id: labelId })}
        </InputLabel>
      )}
      <Grid container spacing={spacing} justify={justify} ref={containerRef} className={propsClasses?.group}>
        {options.map((item: RadioDataType) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} key={item.value} className={propsClasses?.groupItem}>
            {optionType === 'tile' && (
              <TileRadio
                onClick={() => handleClick(item)}
                isSelected={input.value === item.value}
                title={item.isCustom ? item.label : formatMessage({ id: item.label })}
                isDisabled={disabled}
                className={propsClasses?.option}
                orientation={orientation}
              >
                {item.icon}
              </TileRadio>
            )}
            {optionType === 'checkbox' && (
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    onClick={() => handleClick(item)}
                    disabled={disabled}
                    checked={input.value === item.value}
                  />
                }
                label={
                  <Typography variant="h4" color="textSecondary">
                    {item.isCustom ? item.label : formatMessage({ id: item.label })}
                  </Typography>
                }
              />
            )}
          </Grid>
        ))}
        {actionElement && (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} className={classes.action}>
            {actionElement}
          </Grid>
        )}
      </Grid>
      {hasError && (
        <FormHelperText error>
          {formatMessage(meta.error || meta.submitError, { ...meta.error?.values })}
        </FormHelperText>
      )}
    </div>
  );
};
