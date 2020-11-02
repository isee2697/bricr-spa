import Input from '@material-ui/core/Input/Input';
import React from 'react';
import clsx from 'clsx';

import { useLocale } from 'hooks';
import { SearchIcon } from 'ui/atoms/icons';

import { useStyles } from './SimpleSearch.styles';
import { SimpleSearchProps } from './SimpleSearch.types';

export const SimpleSearch = ({ value, className, onChange, placeholderId = 'common.search' }: SimpleSearchProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Input
      className={clsx(classes.input, className || '')}
      onChange={onChange}
      placeholder={formatMessage({ id: placeholderId })}
      startAdornment={<SearchIcon />}
      value={value}
    />
  );
};
