import React, { useCallback } from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { FieldValidator, AnyObject } from 'final-form';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, TileCheckbox, FormHelperText } from 'ui/atoms';
import { validatorsChain } from 'form/validators';

import { CheckboxDataType, CheckboxGroupFieldProps } from './CheckboxGroupField.types';
import { useStyles } from './CheckboxGroupField.styles';

export const CheckboxGroupField = ({
  name,
  options,
  validate,
  validateFields,
  xs = 1,
  sm,
  md,
  lg,
  disabled,
  actionElement,
  orientation,
  match,
}: CheckboxGroupFieldProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { fields, meta } = useFieldArray<string>(name, {
    validate: validate ? ((validatorsChain(...validate) as unknown) as FieldValidator<string>) : undefined,
    validateFields,
  });

  const highlightString = (title: string) => {
    if (!match || !match.trim()) {
      return title;
    }

    const parts = title.split(new RegExp(`(${match})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase().match(match.toLowerCase()) ? (
        <span key={index} className={clsx(classes.itemLabelPart, 'highlight')}>
          {part}
        </span>
      ) : (
        <span key={index} className={classes.itemLabelPart}>
          {part}
        </span>
      ),
    );
  };

  const handleClick = useCallback(
    (item: CheckboxDataType) => {
      if (fields.value && fields.value.includes(item.value)) {
        fields.remove(fields.value.indexOf(item.value));
      } else {
        fields.push(item.value);
      }
    },
    [fields],
  );

  const hasError =
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== undefined && meta.initial !== null && !!meta.error);

  return (
    <>
      <Grid container spacing={3}>
        {options.map((item: CheckboxDataType) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} key={item.value}>
            <TileCheckbox
              onClick={() => handleClick(item)}
              isSelected={fields.value && fields.value.includes(item.value)}
              title={highlightString(formatMessage({ id: item.label, defaultMessage: item.label }))}
              isDisabled={disabled}
              orientation={orientation}
            >
              {item.icon}
            </TileCheckbox>
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
          {formatMessage((meta as AnyObject).error || meta.submitError, {
            ...(meta as AnyObject).error?.values,
          })}
        </FormHelperText>
      )}
    </>
  );
};
