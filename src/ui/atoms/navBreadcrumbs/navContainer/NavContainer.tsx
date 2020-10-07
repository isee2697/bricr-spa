import React, { useMemo } from 'react';
import { Breadcrumbs as MuiBreadcrumbs } from '@material-ui/core';
import { Collapsed } from '../collapsed/Collapsed';

import { CollapsedItems, NavContainerProps } from './NavContainer.types';

export const NavContainer = ({ children, limit }: NavContainerProps) => {
  const [firstItem, ...rest] = children;
  const collapsedItems = useMemo(() => {
    if (rest.length < limit) {
      return null;
    }

    return rest.reduce<CollapsedItems>(
      (value, element, index, arr) => {
        const lengthDiff = arr.length - index;

        if (lengthDiff < limit) {
          value.display.push(element);
        } else {
          value.collapsed.push(element);
        }

        return value;
      },
      {
        collapsed: [],
        display: [],
      } as CollapsedItems,
    );
  }, [limit, rest]);

  const collapsedContainer = [
    <Collapsed>{collapsedItems?.collapsed ?? []}</Collapsed>,
    ...(collapsedItems?.display ?? []),
  ];

  return (
    <MuiBreadcrumbs separator="›" aria-label="Breadcrumb">
      {firstItem}
      {rest.length > limit ? collapsedContainer : rest}
    </MuiBreadcrumbs>
  );
};
