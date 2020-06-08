import React, { ReactNodeArray } from 'react';

import { useStyles } from './ToolbarSection.styles';

export const ToolbarSection = ({ children }: { children: ReactNodeArray }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};
