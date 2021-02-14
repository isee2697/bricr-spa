import React from 'react';

import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { AllocateResultsDetails } from './AllocateResultsDetails';

export const AllocateResultsDetailsContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  return <AllocateResultsDetails onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />;
};
