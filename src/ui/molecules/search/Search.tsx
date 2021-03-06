import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import {
  Avatar,
  Grid,
  Typography,
  CardActions,
  Autocomplete,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Box,
} from 'ui/atoms';
import { FilterIcon } from 'ui/atoms/icons/filter/FilterIcon';
import { SearchIcon } from 'ui/atoms/icons/search/SearchIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { NoteIcon } from 'ui/atoms/icons/note/NoteIcon';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './Search.styles';
import { SearchProps, Search as SearchType } from './Search.types';

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

export const Search = ({
  options,
  setFocus: setFocusProp,
  hasFocus: hasFocusProp,
  placeholder,
  startAdornment,
  endAdornment,
  classes: passedClasses,
  loading = false,
  onSearch,
  ...props
}: SearchProps) => {
  const [hasFocus, setFocus] = useState(!!hasFocusProp);
  const [value, setValue] = useState(props.inputValue ? props.inputValue : '');
  const { formatMessage } = useLocale();
  const ref = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout>();

  const handleType = (searchString: string) => {
    const isNewString = value !== searchString;

    if ((isNewString && searchString.length === 1) || Math.abs(searchString.length - value.length) < 3) {
      searchTimeout && clearTimeout(searchTimeout) && setSearchTimeout(undefined);

      setSearchTimeout(
        setTimeout(() => {
          onSearch?.(searchString);
        }, 250),
      );
    } else if (isNewString && searchString.length > 0) {
      onSearch?.(searchString);
    }

    setValue(searchString);
  };

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
      <Paper {...props} className={clsx(classes.paper, passedClasses?.paper)}>
        {props.children}
        <CardActions>
          <Button onClick={() => setValue('')} fullWidth>
            {formatMessage({ id: 'header.search.all.results' })} ({options.length})
          </Button>
        </CardActions>
      </Paper>
    );
  };

  return (
    <Autocomplete
      {...props}
      className={clsx(classes.root, passedClasses?.root)}
      options={options}
      getOptionLabel={option => option.title}
      groupBy={(option: SearchType) =>
        option.type
          ? formatMessage({ id: `header.search.group.${option.type.toLowerCase()}`, defaultMessage: option.type })
          : ''
      }
      freeSolo
      PaperComponent={Results}
      open={hasFocus}
      renderOption={(option: SearchType) => (
        <Grid
          onClick={() => {
            if (option.onClick) {
              ref?.current?.blur();
              option.onClick();
            }
          }}
          container
          alignItems="center"
          spacing={2}
        >
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
          value={value}
          onBlur={() => {
            setFocus(false);
            setValue('');
          }}
          inputRef={ref}
          onChange={e => handleType(e.target.value)}
          placeholder={formatMessage({ id: placeholder || 'common.search' })}
          className={`${classes.textField} ${hasFocus ? classes.hasFocus : ''} ${passedClasses?.input}`}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            ...{
              startAdornment: startAdornment ?? <SearchIcon />,
              endAdornment: loading ? (
                <Box className={classes.loader}>
                  <CircularProgress />
                </Box>
              ) : (
                endAdornment ?? <FilterIcon className="MuiAutocomplete-endAdornment filter-icon" />
              ),
            },
          }}
        />
      )}
    />
  );
};
