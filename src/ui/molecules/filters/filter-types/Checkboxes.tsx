import React, { useCallback, useState } from 'react';

import { Grid, TileCheckbox } from 'ui/atoms';
// import { useLocale } from 'hooks';

import { useStyles } from './FilterTypes.styles';
import { CheckboxDataType, CheckboxGroupFieldProps } from './FilterTypes.types';

export const Checkboxes = ({
  name,
  options,
  // validate = false,
  validateFields,
  xs = 1,
  sm,
  md,
  lg,
  disabled,
  actionElement,
  orientation,
  onChange,
}: CheckboxGroupFieldProps) => {
  console.log(xs);
  const initFields: string[] = [];
  const [fields, updateFields] = useState(initFields);

  const classes = useStyles();
  // const { formatMessage } = useLocale();

  const handleClick = useCallback(
    (item: CheckboxDataType) => {
      if (fields && fields.includes(item.value)) {
        updateFields(fields.filter(fil => fil === item.value));
      } else {
        const newFields = fields;
        newFields.push(item.value);
        updateFields(newFields);
      }

      onChange(fields);
    },
    [fields, onChange],
  );

  return (
    <>
      <p>{name}</p>
      <Grid container spacing={3}>
        {options.map((item: CheckboxDataType) => (
          <Grid item xs={xs} sm={sm} md={md} lg={lg} key={item.value}>
            <TileCheckbox
              onClick={() => handleClick(item)}
              isSelected={fields && fields.includes(item.value)}
              // title={formatMessage({ id: item.label, defaultMessage: item.label })}
              title={item.label}
              orientation={orientation}
            >
              {item.icon}
            </TileCheckbox>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
