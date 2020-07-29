import React from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Typography } from 'ui/atoms';

export const Dashboard = () => {
  return (
    <>
      <ProjectDetailsHeader />
      <Typography variant="h1">Dashboard</Typography>
    </>
  );
};
