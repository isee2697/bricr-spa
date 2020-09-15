import React from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useLocation, useParams } from 'react-router-dom';

import { NavBreadcrumbProps } from './NavBreadcrumb.types';

export const NavBreadcrumb = ({ title, to, urlBase }: NavBreadcrumbProps) => {
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();

  const path = urlBase ? `${urlBase.replace(':id', id)}${to ?? ''}` : to;
  console.log(path, pathname, id);

  return <BreadcrumbsItem to={path ? path : pathname}>{title}</BreadcrumbsItem>;
};
