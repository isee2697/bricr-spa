import React from 'react';

import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { AllocateResultsDetailItem } from './AllocateResultsDetailItem';

export const AllocateResultsDetailItemContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  return <AllocateResultsDetailItem onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />;
};
