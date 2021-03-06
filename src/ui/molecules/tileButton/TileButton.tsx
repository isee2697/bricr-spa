import React from 'react';
import classNames from 'classnames';

import { AddIcon } from 'ui/atoms/icons';
import { Box, Typography } from 'ui/atoms';

import { useStyles } from './TileButton.styles';
import { TileButtonProps } from './TileButton.types';

export const TileButton = ({
  className,
  onClick,
  title,
  isDisabled,
  width,
  height,
  children = <AddIcon color="inherit" />,
  ...props
}: TileButtonProps) => {
  const classes = useStyles({ isSmallSize: !!title });

  return (
    <Box
      className={classNames(className, classes.root, { [classes.preventClick]: isDisabled })}
      onClick={!isDisabled ? onClick : undefined}
      {...props}
    >
      <Box className={classNames(classes.tile, { [classes.disabled]: isDisabled })}>
        <Box className={classes.children}>{children}</Box>
      </Box>
      {title && <Typography className="title">{title}</Typography>}
    </Box>
  );
};
