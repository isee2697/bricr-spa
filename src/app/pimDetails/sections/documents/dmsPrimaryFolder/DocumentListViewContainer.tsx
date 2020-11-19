import React, { useEffect, useState } from 'react';

import { ListPimsFilters, PropertyType } from 'api/types';
import { DocumentStatus } from '../Documents.types';

import { DocumentListView } from './DocumentListView';
import { DocumentListViewContainerProps } from './DocumentListViewContainer.types';

export const DocumentListViewContainer = ({ documents }: DocumentListViewContainerProps) => {
  const [status, setStatus] = useState(DocumentStatus.Drafts);
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    setActiveFilters({
      propertyTypes: [PropertyType.Apartment, PropertyType.House],
    });
  }, []);

  return (
    <DocumentListView
      status={status}
      onStatusChange={setStatus}
      onFilter={handleFilterChange}
      activeFilters={activeFilters}
      isLoading={false}
      isError={false}
      documents={documents}
    />
  );
};
