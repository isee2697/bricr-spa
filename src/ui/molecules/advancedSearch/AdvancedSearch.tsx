import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, TextField, Typography } from 'ui/atoms';

import { AdvancedSearchItem, AdvancedSearchProps } from './AdvancedSearch.types';
import { useStyles } from './AdvancedSearch.styles';

export const AdvancedSearch = ({
  title,
  items,
  placeholder,
  disabled,
  value,
  align,
  showSelected = true,
  classes: propsClasses,
  onChange,
}: AdvancedSearchProps) => {
  const classes = useStyles();

  const select = useRef<HTMLSelectElement | null>(null);
  const [isOpened, setOpened] = useState(false);
  const [key, setKey] = useState(items.find(item => item.value === value)?.label || '');

  const selectedItem: AdvancedSearchItem | undefined = items.find(item => item.value === value);
  const listItems: AdvancedSearchItem[] = showSelected ? [...items] : items.filter(item => item.value !== value);
  const handleChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => setKey(e.target.value);

  return (
    <div className={classes.root}>
      <Box
        onClick={() => {
          if (!disabled) {
            setOpened(opened => !opened);
            setKey(selectedItem?.label || '');
          }

          select.current?.focus();
        }}
        className={classNames(propsClasses?.input, classes.input, { isOpened, disabled })}
      >
        {title && (
          <Typography variant="h6" className={classNames(classes.label, isOpened && classes.blue)}>
            {title}
          </Typography>
        )}
        <Box className={classNames(propsClasses?.inputInner, classes.inputInner, isOpened && 'selected')}>
          {!isOpened && (
            <Box display="flex" alignItems="center" className={classes.itemLabelWrapper}>
              {selectedItem?.icon}
              <span className={classes.itemLabel}>{selectedItem?.label}</span>
            </Box>
          )}
          {isOpened && (
            <TextField
              autoFocus
              value={key}
              classes={{ root: classes.searchField }}
              InputProps={{ classes: { root: classes.searchFieldInput } }}
              onChange={handleChangeSearchKey}
            />
          )}
        </Box>
      </Box>
      <Box className={classNames(propsClasses?.menu, classes.menu, { isOpened })}>
        {listItems
          .filter(item => item.label.includes(key))
          .map((item, index) => (
            <Box
              key={`${item.value}`}
              className={classNames(
                propsClasses?.menuItem,
                classes.item,
                item.color,
                { selected: value === item.value },
                align === 'left' && 'alignLeft',
                align === 'right' && 'alignRight',
              )}
              onClick={() => {
                setOpened(false);
                onChange(item.value);
              }}
            >
              <Box
                display="flex"
                width="100%"
                alignItems="center"
                className={classNames(
                  propsClasses?.menuItemInner,
                  classes.itemContent,
                  value === item.value && 'selected',
                  listItems.length === index + 1 && 'last',
                )}
              >
                {item.icon}
                <span className={classes.itemLabel}>{item.label}</span>
              </Box>
            </Box>
          ))}
      </Box>
      <Box className={classNames(isOpened && classes.autocompleteBack)} onClick={() => setOpened(false)} />
    </div>
  );
};
