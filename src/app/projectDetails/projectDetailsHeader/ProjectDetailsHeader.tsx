import React from 'react';

import { Box } from 'ui/atoms';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

import { ProjectDetailsHeaderProps } from './ProjectDetailsHeader.types';

export const ProjectDetailsHeader = ({ action }: ProjectDetailsHeaderProps) => {
  return (
    <Box mb={1} display="flex" justifyContent="space-between" alignItems="center" minHeight={32}>
      <NavBreadcrumbs />
      {action}
    </Box>
  );
};
