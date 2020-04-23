import React from 'react';
import { Link } from 'react-router-dom';

import { Tab } from 'ui/atoms';

import { LinkTabProps } from './LinkTab.types';

export const LinkTab = ({ icon, ...props }: LinkTabProps) => {
  return <Tab component={Link} icon={icon} {...props} />;
};
