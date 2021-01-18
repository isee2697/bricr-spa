import React, { useState, ReactNode } from 'react';

import { Box, IconButton } from 'ui/atoms';
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { UploadModal } from 'ui/organisms';

import { ListViewTabsProps } from './ListViewTabs.types';

export const ListViewTabs = ({ activeFilters, onFilter, onAdd, isExpanded, onToggleExpand }: ListViewTabsProps) => {
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const handleUpload = () => {
    setDialog(
      <UploadModal
        isOpened={true}
        onClose={() => setDialog(null)}
        onUpload={files => {
          onAdd(files);
          setDialog(null);
        }}
      />,
    );
  };

  return (
    <Box display="flex">
      <IconButton aria-label="add" color="primary" size="small" onClick={handleUpload}>
        <AddIcon color="inherit" />
      </IconButton>
      <Box mr={2} />
      <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
      <Box mr={2} />
      <IconButton size="small" variant="roundedContained" onClick={onToggleExpand}>
        {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </IconButton>

      {/* show upload modal */}
      {dialog}
    </Box>
  );
};
