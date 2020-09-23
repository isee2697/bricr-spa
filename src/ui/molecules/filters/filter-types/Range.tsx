import React from 'react';

import { TextField, InputAdornment } from 'ui/atoms';
// import { useLocale } from 'hooks';

import { useStyles } from './FilterTypes.styles';
import { RangeProps } from './FilterTypes.types';

export const Range = ({ title, valueStart, valueEnd, onChange, suffix = '', ...rest }: RangeProps) => {
  // const classes = useStyles();
  // const { formatMessage } = useLocale();

  return (
    <>
      <p>{title}</p>
      <label>
        <p>{'filters.from'}</p>
        <TextField
          id={'asdasdasd'}
          margin="normal"
          variant="outlined"
          type="text"
          value={valueStart}
          InputProps={{
            endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
          }}
          {...rest}
          onChange={onChange}
        />
      </label>
      <label>
        <p>{'filters.to'}</p>
        <TextField
          id={'asdasdasd2'}
          margin="normal"
          variant="outlined"
          type="text"
          value={valueEnd}
          InputProps={{
            endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
          }}
          {...rest}
          onChange={onChange}
        />
      </label>
    </>
  );
};
