import React, { useState, useEffect, ChangeEvent } from 'react';
import clsx from 'clsx';

import { Search as SearchType } from 'ui/molecules/search/Search.types';
import { Avatar, Grid, Typography, CardActions, Autocomplete, TextField, Button, Paper, Box } from 'ui/atoms';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { NoteIcon } from 'ui/atoms/icons/note/NoteIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CloseIcon } from 'ui/atoms/icons';

import { useStyles } from './MultiSearch.styles';
import { MultiSearchProps } from './MultiSearch.types';

const getIcon = (type: string) => {
  switch (type) {
    case 'Email':
      return <MailIcon />;
    case 'Contact':
      return <UserIcon />;
    case 'Property':
      return <BuildingIcon />;
    default:
    case 'Note':
      return <NoteIcon />;
  }
};

export const MultiSearch = ({
  options,
  value: inputValue = [],
  setFocus: setFocusProp,
  hasFocus: hasFocusProp,
  placeholder,
  startAdornment,
  endAdornment,
  classes: passedClasses,
  onChange,
  onAddNewOption,
  ...props
}: MultiSearchProps) => {
  const [value, setValue] = useState([...(inputValue || [])]);
  const [hasFocus, setFocus] = useState(!!hasFocusProp);
  const [keyword, setKeyword] = useState(props.inputValue ? props.inputValue : '');
  const { formatMessage } = useLocale();
  const classes = useStyles();

  useEffect(() => {
    if (setFocusProp) {
      setFocusProp(hasFocus);
    }
  }, [hasFocus, setFocusProp]);

  const highlightString = (title: string) => {
    if (!keyword.trim()) {
      return title;
    }

    const parts = title.split(new RegExp(`(${keyword})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase().match(keyword.toLowerCase()) ? (
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
      <Paper {...props} className={clsx(classes.paper, passedClasses?.paper)}>
        {props.children}
        <CardActions>
          <Button onClick={() => setKeyword('')} fullWidth>
            {formatMessage({ id: 'header.search.all.results' })} ({options.length})
          </Button>
        </CardActions>
      </Paper>
    );
  };

  return (
    <Autocomplete
      {...props}
      onChange={(event: ChangeEvent<{}>, newValue) => {
        if (newValue.length === 0 || typeof newValue[newValue.length - 1] !== 'string') {
          setValue([...newValue]);
          onChange && onChange(newValue || []);
        } else {
          const lastValue = newValue[newValue.length - 1];

          if (onAddNewOption) {
            onAddNewOption(((lastValue as unknown) as string) || '');
          }
        }
      }}
      multiple
      className={clsx(classes.root, passedClasses?.root)}
      options={options.filter(option => value.findIndex(item => item.title === option.title) < 0)}
      groupBy={(option: SearchType) =>
        option.type
          ? formatMessage({ id: `header.search.group.${option.type.toLowerCase()}`, defaultMessage: option.type })
          : ''
      }
      value={value}
      freeSolo
      PaperComponent={Results}
      open={hasFocus}
      renderOption={(option: SearchType) => (
        <Grid container alignItems="center" spacing={2}>
          <Grid item>{option.icon ?? <Avatar variant="rounded">{getIcon(option.type)}</Avatar>}</Grid>
          <Grid item>
            {highlightString(option.title)}
            <Typography variant="body2" color="textSecondary">
              {option.subline}
            </Typography>
          </Grid>
          <Grid item className={classes.date}>
            {!!option.date ? (
              <Typography variant="body2" color="textSecondary">
                {option.date.toDateString()}
              </Typography>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      )}
      renderInput={params => (
        <TextField
          {...params}
          onFocus={() => setFocus(true)}
          value={keyword}
          onBlur={() => {
            setFocus(false);
            setKeyword('');
          }}
          onChange={e => setKeyword(e.target.value)}
          placeholder={formatMessage({ id: placeholder || 'common.search' })}
          className={`${classes.textField} ${hasFocus ? classes.hasFocus : ''} ${passedClasses?.input}`}
          variant="outlined"
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index: number) => (
          <Box
            display="flex"
            alignItems="center"
            className={classes.chip}
            onClick={() => {
              setValue([...value.filter(item => item.title !== option.title)]);
            }}
          >
            {option.icon}
            <Typography variant="h5" color="textPrimary">
              {option.title}
            </Typography>
            <Box mr={1} />
            <CloseIcon fontSize="small" />
          </Box>
        ))
      }
      onKeyUp={e => {
        if (e.key === 'Enter' && onAddNewOption) {
          e.preventDefault();
          // onAddNewOption(keyword);
        }
      }}
    />
  );
};
