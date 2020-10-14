import React from 'react';

import { ProjectDetailsProps } from '../../ProjectDetails.types';

import { Summary } from './Summary';
import { ProjectDetailsSummary } from './Summary.types';

export const SummaryContainer = ({ isSidebarVisible, onSidebarOpen }: ProjectDetailsProps) => {
  const summary: ProjectDetailsSummary = {
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
  };

  return <Summary isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} summary={summary} />;
};
