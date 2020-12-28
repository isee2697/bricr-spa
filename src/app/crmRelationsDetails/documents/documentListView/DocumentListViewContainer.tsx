import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router';

import { Box } from 'ui/atoms';
import { ListPimsFilters, PropertyType } from 'api/types';
import { UploadModal } from 'ui/organisms';

import { DocumentListViewContainerProps } from './DocumentListViewContainer.types';
import { ListViewTabs } from './listViewTabs/ListViewTabs';
import { DocumentListViewType } from './listViewTabs/ListViewTabs.types';
import { DocumentsListContainer } from './list/ListContainer';
import { DocumentTableView } from './tableView/DocumentTableView';

export const DocumentListViewContainer = ({ path, documents }: DocumentListViewContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
  const [view, setView] = useState<DocumentListViewType>('detail');
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const { push } = useHistory();

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const handleUpload = () => {
    setDialog(
      <UploadModal
        isOpened={true}
        onClose={() => setDialog(null)}
        onUpload={files => {
          setDialog(null);
        }}
      />,
    );
  };

  const handleNavigateDetail = (id: string) => {
    push(`${path}/${id}`);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box ml="auto" mr={1.5}>
        <ListViewTabs
          status={view}
          onStatusChange={setView}
          activeFilters={activeFilters}
          onFilter={handleFilterChange}
          onAdd={handleUpload}
        />
      </Box>
      <Box mt={7}>
        {view === 'detail' ? (
          <DocumentsListContainer documents={documents || []} onClick={handleNavigateDetail} />
        ) : (
          <DocumentTableView documents={documents || []} onClick={handleNavigateDetail} />
        )}
      </Box>

      {dialog}
    </Box>
  );
};
