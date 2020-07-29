import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic';
import { Breadcrumbs as MuiBreadcrumbs } from '@material-ui/core';

import { Link } from 'ui/atoms/index';

import { BreadcrumbsItemProps } from './NavBreadcrumbs.types';

const Item = ({ to, children }: BreadcrumbsItemProps) => (
  <Link component={RouterLink} to={to}>
    {children}
  </Link>
);

const renderContainer = ({ children }: { children: ReactElement }) => {
  return (
    <MuiBreadcrumbs separator="›" aria-label="Breadcrumb">
      {children}
    </MuiBreadcrumbs>
  );
};

export const NavBreadcrumbs = () => {
  return <Breadcrumbs container={renderContainer} item={Item} finalItem={Item} />;
};
