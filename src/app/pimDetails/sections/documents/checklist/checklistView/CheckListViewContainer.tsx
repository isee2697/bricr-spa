import React, { useState } from 'react';

import { ListPimsFilters, PropertyType } from 'api/types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { DMSDocuments } from 'api/mocks/dms';

import { CheckListView } from './CheckListView';
import { CheckListViewContainerProps } from './CheckListView.types';

export const CheckListViewContainer = ({ isSidebarVisible, onSidebarOpen, path }: CheckListViewContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
  const [status, setStatus] = useState<ActionTabStatus>('active');

  const data = DMSDocuments;

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const amounts = {
    actionRequired: 1,
    active: 4,
    archived: 0,
  };

  return (
    <CheckListView
      data={data || []}
      status={status}
      onStatusChange={setStatus}
      activeFilters={activeFilters}
      onFilter={handleFilterChange}
      amounts={amounts}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      path={path}
    />
  );
};
