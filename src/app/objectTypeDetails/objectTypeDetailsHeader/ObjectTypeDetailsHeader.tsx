import React from 'react';

import { Box, NavBreadcrumbs } from 'ui/atoms';

import { ObjectTypeDetailsHeaderProps } from './ObjectTypeDetailsHeader.types';

export const ObjectTypeDetailsHeader = ({ action }: ObjectTypeDetailsHeaderProps) => {
  return (
    <Box mb={1} display="flex" justifyContent="space-between" alignItems="center" minHeight={32}>
      <NavBreadcrumbs />
      {action}
    </Box>
  );
};
