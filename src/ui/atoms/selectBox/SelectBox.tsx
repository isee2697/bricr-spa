import React, { useState, useRef } from 'react';
import classNames from 'classnames';

import { Box, Popper, Grow, Paper, Typography, ClickAwayListener } from 'ui/atoms';
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

  const select = useRef(null);
  const item = ((select?.current as unknown) as HTMLDivElement) ?? undefined;
  const [isOpened, setOpened] = useState(false);

  const listItems: SelectBoxItem[] = showSelected ? [...items] : items.filter(item => item.value !== value);

  return (
    <div className={classes.root} ref={select}>
      <Box
        onClick={() => {
          !disabled && setOpened(opened => !opened);
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
      <Popper
        style={{
          width: item?.clientWidth,
          left: item?.getBoundingClientRect().left,
        }}
        className={classes.popper}
        open={isOpened}
        anchorEl={select.current}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ position: 'static', transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classNames(propsClasses?.menu, classes.menu)}>
              <ClickAwayListener onClickAway={() => setOpened(false)}>
                <>
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
                        className={classNames(
                          propsClasses?.menuItemInner,
                          item.color,
                          listItems.length === index + 1 && 'last',
                        )}
                      >
                        {item.label}
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
