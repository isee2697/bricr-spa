import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, TextField, Typography, Popper, Grow, Paper, ClickAwayListener } from 'ui/atoms';

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

  const select = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const [key, setKey] = useState(items.find(item => item.value === value)?.label || '');

  const selectedItem: AdvancedSearchItem | undefined = items.find(item => item.value === value);
  const listItems: AdvancedSearchItem[] = showSelected ? [...items] : items.filter(item => item.value !== value);
  const handleChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => setKey(e.target.value);

  const highlightString = (title: string) => {
    if (!key.trim()) {
      return title;
    }

    const parts = title.split(new RegExp(`(${key})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase().match(key.toLowerCase()) ? (
        <span key={index} className={classNames(classes.itemLabelPart, 'highlight')}>
          {part}
        </span>
      ) : (
        <span key={index} className={classes.itemLabelPart}>
          {part}
        </span>
      ),
    );
  };

  return (
    <div className={classes.root} ref={select}>
      <Box
        onClick={() => {
          if (!disabled) {
            setOpened(opened => !opened);
            setKey(selectedItem?.label || '');
          }
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
            <Box
              display="flex"
              alignItems="center"
              className={classNames(propsClasses?.itemLabelWrapper, classes.itemLabelWrapper)}
            >
              {!selectedItem && placeholder}
              {selectedItem && (
                <>
                  {selectedItem.icon}
                  <span className={classes.itemLabel}>{selectedItem.label}</span>
                </>
              )}
            </Box>
          )}
          {isOpened && (
            <TextField
              autoFocus
              value={key}
              classes={{ root: classNames(propsClasses?.searchField, classes.searchField) }}
              InputProps={{ classes: { root: classNames(propsClasses?.searchFieldInput, classes.searchFieldInput) } }}
              onChange={handleChangeSearchKey}
            />
          )}
        </Box>
      </Box>
      <Popper className={classes.popper} open={isOpened} anchorEl={select.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classNames(propsClasses?.menu, classes.menu)}>
              <ClickAwayListener onClickAway={() => setOpened(false)}>
                <>
                  {listItems
                    .filter(item => item.label.toLowerCase().includes(key.toLowerCase()))
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
                          <span className={classes.itemLabel}>{highlightString(item.label)}</span>
                        </Box>
                      </Box>
                    ))}
                </>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
