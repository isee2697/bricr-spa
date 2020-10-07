import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'ui/atoms';

import { LinkTabProps } from './LinkTab.types';
import { useStyles } from './LinkTab.styles';

export const LinkTab = ({ icon, ...props }: LinkTabProps) => {
  const classes = useStyles();

  return <Tab component={Link} className={classes.root} icon={icon} {...props} />;
};
