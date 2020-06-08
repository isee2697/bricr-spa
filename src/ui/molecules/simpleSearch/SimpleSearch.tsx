import React from 'react';
import Input from '@material-ui/core/Input/Input';

import { useLocale } from 'hooks';
import { SearchIcon } from 'ui/atoms/icons';

import { useStyles } from './SimpleSearch.styles';
import { SimpleSearchProps } from './SimpleSearch.types';

export const SimpleSearch = ({ value, onChange, placeholderId = 'common.search' }: SimpleSearchProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Input
      className={classes.input}
      onChange={onChange}
      placeholder={formatMessage({ id: placeholderId })}
      startAdornment={<SearchIcon />}
      value={value}
    />
  );
};
