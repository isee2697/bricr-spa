import React from 'react';
import clsx from 'classnames';

import { Box } from 'ui/atoms';

import { useStyles } from './ColorPickerItem.styles';
import { ColorPickerItemProps } from './ColorPickerItem.types';

export const ColorPickerItem = ({ selected, theme, onClick }: ColorPickerItemProps) => {
  const classes = useStyles({ theme });

  return (
    <Box className={clsx(classes.root, selected && 'selected')}>
      <Box className={classes.color} onClick={onClick} />
    </Box>
  );
};
