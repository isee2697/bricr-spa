import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, Typography, NativeMenu } from 'ui/atoms';
import { ArrowDownIcon } from 'ui/atoms/icons';

import { SelectBoxItem, SelectBoxProps } from './SelectBox.types';
import { useStyles } from './SelectBox.styles';

export const SelectBox = ({
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
}: SelectBoxProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const select = useRef<HTMLDivElement>(null);

  const listItems: SelectBoxItem[] = showSelected ? [...items] : items.filter(item => item.value !== value);

  const handleOpenSelect = (e: React.MouseEvent) => {
    if (!disabled) {
      setAnchorEl(e.currentTarget);
    }
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
          <Typography variant="h6" className={classNames(!!anchorEl && classes.blue)}>
            {title}
          </Typography>
        )}
        <Box className={classNames(propsClasses?.inputInner, classes.inputInner)}>
          <span
            className={classNames(classes.inputValue, {
              disabled,
              placeholder: !value,
            })}
          >
            {items.find(item => item.value === value)?.label ?? placeholder}
          </span>
          <ArrowDownIcon className={classNames(!!anchorEl && classes.reversedArrow)} />
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
        elevation={0}
        getContentAnchorEl={null}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: { width: select.current?.clientWidth },
        }}
        MenuListProps={{ classes: { root: classes.menuList } }}
      >
        {listItems.map((item, index) => (
          <Box
            key={`${item.value}`}
            className={classNames(
              propsClasses?.menuItem,
              classes.item,
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
              width="100%"
              className={classNames(propsClasses?.menuItemInner, item.color, listItems.length === index + 1 && 'last')}
            >
              {item.label}
            </Box>
          </Box>
        ))}
      </NativeMenu>
      {showBackDrop && (
        <Box className={classNames(!!anchorEl && classes.autocompleteBack)} onClick={() => setAnchorEl(null)} />
      )}
    </div>
  );
};
