import React from 'react';

import { Box } from 'ui/atoms';

import { useStyles } from './HeaderColumnItem.styles';

export const HeaderColumnItemPlaceholder = () => {
  const classes = useStyles();

  return <Box width="100%" className={classes.placeholderItem} />;
};
