import React from 'react';

import { ProjectDetailsProps } from '../../ProjectDetails.types';

import { AllocateResults } from './AllocateResults';

export const AllocateResultsContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  return <AllocateResults onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />;
};
