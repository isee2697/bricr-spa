import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, TextField, Typography, NativeMenu } from 'ui/atoms';

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
  showBackDrop = true,
  classes: propsClasses,
  onChange,
}: AdvancedSearchProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const select = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

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

  const handleOpenSelect = (e: React.MouseEvent) => {
    setAnchorEl(e.currentTarget);
    input.current?.focus();
    setKey(selectedItem?.label || '');
  };

  return (
    <div className={classes.root} ref={select}>
      <Box
        onClick={handleOpenSelect}
        className={classNames(propsClasses?.input, classes.input, !!anchorEl && showBackDrop && 'selected', {
          disabled,
        })}
      >
        {title && (
          <Typography variant="h6" className={classNames(classes.label, !!anchorEl && classes.blue)}>
            {title}
          </Typography>
        )}
        <Box className={classNames(propsClasses?.inputInner, classes.inputInner, !!anchorEl && 'selected')}>
          {!anchorEl && (
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
          {!!anchorEl && (
            <TextField
              ref={input}
              autoFocus
              value={key}
              classes={{ root: classNames(propsClasses?.searchField, classes.searchField) }}
              InputProps={{ classes: { root: classNames(propsClasses?.searchFieldInput, classes.searchFieldInput) } }}
              onChange={handleChangeSearchKey}
            />
          )}
        </Box>
      </Box>
      <NativeMenu
        id="select-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableAutoFocus
        disableEnforceFocus
        keepMounted
        autoFocus={false}
        elevation={0}
        getContentAnchorEl={null}
        onClose={() => setAnchorEl(null)}
        PaperProps={{ style: { width: select.current?.clientWidth } }}
        MenuListProps={{ style: { padding: 0 } }}
      >
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
                setAnchorEl(null);
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
      </NativeMenu>
      <Box className={classNames(!!anchorEl && classes.autocompleteBack)} onClick={() => setAnchorEl(null)} />
    </div>
  );
};
