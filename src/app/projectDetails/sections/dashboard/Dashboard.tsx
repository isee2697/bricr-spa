import React from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Typography } from 'ui/atoms';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export const Dashboard = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  return (
    <>
      <ProjectDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Typography variant="h1">Dashboard</Typography>
    </>
  );
};
