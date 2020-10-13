import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic';
import { Link, Typography } from 'ui/atoms/index';

import { BreadcrumbsItemProps } from './NavBreadcrumbs.types';
import { NavContainer } from './navContainer/NavContainer';

const inlineLimit = 4;

const Item = ({ to, children }: BreadcrumbsItemProps) => (
  <Link component={RouterLink} to={to}>
    {children}
  </Link>
);

const FinalItem = ({ to, children }: BreadcrumbsItemProps) => (
  <Link component={RouterLink} to={to}>
    <Typography noWrap color="textPrimary" variant="body2">
      <strong>{children}</strong>
    </Typography>
  </Link>
);

export const NavBreadcrumbs = () => {
  return (
    <Breadcrumbs
      container={(props: { children: ReactElement[] }) => <NavContainer {...props} limit={inlineLimit} />}
      item={Item}
      finalItem={FinalItem}
    />
  );
};
