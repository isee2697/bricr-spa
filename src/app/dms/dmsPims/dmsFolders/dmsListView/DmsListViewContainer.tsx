import React, { useState } from 'react';

import { Box } from 'ui/atoms';
import { ListPimsFilters, PropertyType } from 'api/types';

import { DmsListViewContainerProps } from './DmsListViewContainer.types';
import { DmsViewTabs } from './dmsViewTabs/DmsViewTabs';
import { DmsViewType } from './dmsViewTabs/DmsViewTabs.types';
import { DmsDetailView } from './dmsDetailView/DmsDetailView';
import { DmsTableView } from './dmsTableView/DmsTableView';

export const DmsListViewContainer = ({ id, name, isLoading, isError, data }: DmsListViewContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
  const [view, setView] = useState<DmsViewType>('detail');

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box ml="auto" mr={1.5}>
        <DmsViewTabs
          status={view}
          onStatusChange={setView}
          activeFilters={activeFilters}
          onFilter={handleFilterChange}
          onAdd={() => {}}
        />
      </Box>
      <Box mt={7}>{view === 'detail' ? <DmsDetailView data={data || []} /> : <DmsTableView data={data || []} />}</Box>
    </Box>
  );
};
