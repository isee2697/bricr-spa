import React from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { useLocation, useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { NavBreadcrumbProps } from './NavBreadcrumb.types';

export const NavBreadcrumb = ({ title, to, isPimDetailsPage = false }: NavBreadcrumbProps) => {
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();

  const path = isPimDetailsPage ? `${AppRoute.pimDetails.replace(':id', id)}${to ?? ''}` : to;

  return <BreadcrumbsItem to={path ? path : pathname}>{title}</BreadcrumbsItem>;
};
