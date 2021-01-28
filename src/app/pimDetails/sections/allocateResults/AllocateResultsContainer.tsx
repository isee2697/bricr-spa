import React from 'react';

import { PimDetailsSectionProps } from '../../PimDetails.types';

import { AllocateResults } from './AllocateResults';

export const AllocateResultsContainer = ({ onSidebarOpen, isSidebarVisible }: PimDetailsSectionProps) => {
  return <AllocateResults onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />;
};

export default AllocateResultsContainer;
