import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { SalesSettings } from './SalesSettings';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  return (
    <>
      <SalesSettings
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        onAddAllocation={() => alert('asd')}
      />
    </>
  );
};
