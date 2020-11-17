import React from 'react';

import { PimDetailsSectionProps } from '../../PimDetails.types';

import { AllocateResultsDetails } from './AllocateResultsDetails';

export const AllocateResultsDetailsContainer = ({ onSidebarOpen, isSidebarVisible }: PimDetailsSectionProps) => {
  return <AllocateResultsDetails onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />;
};
