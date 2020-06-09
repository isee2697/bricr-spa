import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, Typography } from 'ui/atoms';
import { ArrowDownIcon } from 'ui/atoms/icons';

import { DropdownProps } from './Dropdown.types';
import { useStyles } from './Dropdown.styles';

export const Dropdown = ({ items, placeholder, disabled, value, onChange }: DropdownProps) => {
  const classes = useStyles();

  const select = useRef<HTMLSelectElement | null>(null);
  const [isOpened, setOpened] = useState(false);

  return (
    <div className={classes.root}>
      <Box
        onClick={() => {
          !disabled && setOpened(opened => !opened);
          select.current?.focus();
        }}
        className={classNames(classes.input, { isOpened, disabled })}
      >
        <Typography className={classNames(classes.value, { disabled, placeholder: !value })}>
          {items.find(item => item.value === value)?.label ?? placeholder}
        </Typography>
        <ArrowDownIcon className={classNames(isOpened && classes.reversedArrow)} />
      </Box>
      <Box className={classNames(classes.menu, { isOpened })}>
        {items.map(item => (
          <Box
            key={`${item.value}`}
            className={classNames(classes.item, { selected: value === item.value })}
            onClick={() => {
              setOpened(false);
              onChange(item.value);
            }}
          >
            {item.label}
          </Box>
        ))}
      </Box>
    </div>
  );
};
