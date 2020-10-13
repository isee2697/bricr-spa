import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, Typography } from 'ui/atoms';
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
  classes: propsClasses,
  onChange,
}: SelectBoxProps) => {
  const classes = useStyles();

  const select = useRef<HTMLSelectElement | null>(null);
  const [isOpened, setOpened] = useState(false);

  const listItems: SelectBoxItem[] = showSelected ? [...items] : items.filter(item => item.value !== value);

  return (
    <div className={classes.root}>
      <Box
        onClick={() => {
          !disabled && setOpened(opened => !opened);
          select.current?.focus();
        }}
        className={classNames(propsClasses?.input, classes.input, { isOpened, disabled })}
      >
        {title && (
          <Typography variant="h6" className={classNames(isOpened && classes.blue)}>
            {title}
          </Typography>
        )}
        <Box className={classNames(propsClasses?.inputInner, classes.inputInner, isOpened && 'selected')}>
          <span
            className={classNames(classes.value, {
              disabled,
              placeholder: !value,
            })}
          >
            {items.find(item => item.value === value)?.label ?? placeholder}
          </span>
          <ArrowDownIcon className={classNames(isOpened && classes.reversedArrow)} />
        </Box>
      </Box>
      <Box className={classNames(propsClasses?.menu, classes.menu, { isOpened })}>
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
              setOpened(false);
              onChange(item.value);
            }}
          >
            <Box
              width="100%"
              className={classNames(propsClasses?.menuItemInner, listItems.length === index + 1 && 'last')}
            >
              {item.label}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={classNames(isOpened && classes.autocompleteBack)} />
    </div>
  );
};
