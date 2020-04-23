import React from 'react';
import { Link } from 'react-router-dom';

import { Tab } from 'ui/atoms';

import { LinkTabProps } from './LinkTab.types';
import { useStyles } from './LinkTab.styles';

export const LinkTab = ({ icon, ...props }: LinkTabProps) => {
  const classses = useStyles();

  return <Tab component={Link} className={classses.root} icon={icon} {...props} />;
};
