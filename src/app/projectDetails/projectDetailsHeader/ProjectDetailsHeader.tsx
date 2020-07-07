import React from 'react';

import { Box } from 'ui/atoms';
import { NavBreadcrumbs } from 'ui/atoms/navBreadcrumbs/NavBreadcrumbs';

export const ProjectDetailsHeader = () => {
  return (
    <Box mb={3}>
      <NavBreadcrumbs />
    </Box>
  );
};
