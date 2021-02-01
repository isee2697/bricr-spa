import React from 'react';
import classnames from 'classnames';

import { Box, Typography, MenuItem } from 'ui/atoms';
import { HistoryIcon } from 'ui/atoms/icons';

import { useStyles } from './ListOptionsMenuItem.styles';
import { ListOptionsMenuItemProps } from './ListOptionsMenuItem.types';

export const ListOptionsMenuItem = ({
  title,
  onClick,
  icon,
  color,
  dataTestId,
  disabled,
  className,
}: ListOptionsMenuItemProps) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classnames(classes.menuItem, className)}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
      data-testid={dataTestId}
      disabled={disabled}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1" color={color}>
          {title}
        </Typography>
      </Box>
    </MenuItem>
  );
};
