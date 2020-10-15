import React, { useEffect, useState } from 'react';
import clsx from 'classnames';

import { Autocomplete, TextField, Typography, Box, Paper, InputAdornment } from 'ui/atoms';

import { AdvancedSearch as AdvancedSearchItem, AdvancedSearchProps } from './AdvancedSearch.types';
import { useStyles } from './AdvancedSearch.styles';

export const AdvancedSearch = ({
  label,
  options,
  inputItem,
  hasFocus: hasFocusProp,
  setFocus: setFocusProp,
  inputValue = '',
  onChange,
  ...props
}: AdvancedSearchProps) => {
  const [hasFocus, setFocus] = useState(!!hasFocusProp);
  const [value, setValue] = useState(inputValue ? inputValue : '');
  const classes = useStyles();

  useEffect(() => {
    if (setFocusProp) {
      setFocusProp(hasFocus);
    }
  }, [hasFocus, setFocusProp]);

  const highlightString = (title: string) => {
    if (!value.trim()) {
      return title;
    }

    const parts = title.split(new RegExp(`(${value})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase().match(value.toLowerCase()) ? (
        <span key={index} className={classes.highlight}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const Results = (props: Parameters<typeof Paper>[0]) => {
    return (
      <Paper {...props} className={classes.paper}>
        {props.children}
      </Paper>
    );
  };

  return (
    <Box className={clsx(classes.root, hasFocus && 'selected')}>
      {label && (
        <Typography variant="h6" className={clsx(classes.label, hasFocus && 'selected')}>
          {label}
        </Typography>
      )}
      <Autocomplete
        {...props}
        onChange={(event: React.ChangeEvent<{}>, value: AdvancedSearchItem | null) => {
          if (onChange && value) {
            onChange(value.key);
          }
        }}
        value={inputItem}
        open={hasFocus}
        renderInput={params => (
          <TextField
            {...params}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
            }}
            className={clsx(classes.textField, hasFocus && 'selected')}
            onChange={e => setValue(e.target.value)}
            InputProps={{
              ...params.InputProps,
              startAdornment: inputItem && inputItem.icon && (
                <InputAdornment position="start">{inputItem.icon}</InputAdornment>
              ),
            }}
          />
        )}
        PaperComponent={Results}
        options={options}
        getOptionLabel={option => option.title}
        freeSolo
        blurOnSelect
        renderOption={(option: AdvancedSearchItem) => (
          <>
            <Box className={classes.optionIcon}>{option.icon}</Box>
            <Box className={classes.optionTitle}>{highlightString(option.title)}</Box>
          </>
        )}
        classes={{ root: classes.autocompleteRoot, option: classes.option }}
      />
      <Box className={clsx(hasFocus && classes.autocompleteBack)} />
    </Box>
  );
};
