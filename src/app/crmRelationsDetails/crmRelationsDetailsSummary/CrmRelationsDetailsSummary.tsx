import React from 'react';

import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { CrmRelationsDetailsSummaryProps } from './CrmRelationsDetailsSummary.types';

export const CrmRelationsDetailsSummary = ({ onSidebarOpen, isSidebarVisible }: CrmRelationsDetailsSummaryProps) => {
  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
    </>
  );
};
