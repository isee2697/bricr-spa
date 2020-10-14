import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, Popper, Grow, Paper } from 'ui/atoms';
import { ArrowDownIcon } from 'ui/atoms/icons';

import { DropdownProps } from './Dropdown.types';
import { useStyles } from './Dropdown.styles';

export const Dropdown = ({ items, placeholder, disabled, value, align, onChange }: DropdownProps) => {
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
      <Popper open={isOpened} anchorEl={select.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              {items.map(item => (
                <Box
                  key={`${item.value}`}
                  className={classNames(
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
                  {item.label}
                </Box>
              ))}
            </Paper>
          </Grow>
        )}
      </Popper>
      {/* <Box className={classNames(classes.menu, { isOpened })}>
      </Box> */}
    </div>
  );
};
