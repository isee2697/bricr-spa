import React, { useState, ReactNode } from 'react';

import { Grid, IconButton } from 'ui/atoms';
import { ListIcon, SwimlaneIcon, AddIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { UploadModal } from 'ui/organisms';

import { ListViewTabsProps } from './ListViewTabs.types';

export const ListViewTabs = ({ status, onStatusChange, activeFilters, onFilter, onAdd }: ListViewTabsProps) => {
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
    <Grid container spacing={3}>
      <Grid item>
        <IconButton variant="rounded" size="small" aria-label="detail" onClick={() => onStatusChange('detail')}>
          <SwimlaneIcon color={status === 'detail' ? 'primary' : 'inherit'} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton variant="rounded" size="small" aria-label="table" onClick={() => onStatusChange('table')}>
          <ListIcon color={status === 'table' ? 'primary' : 'inherit'} />
        </IconButton>
      </Grid>
      <Grid item>
        <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
      </Grid>
      <Grid item>
        <IconButton aria-label="add" color="primary" size="small" onClick={handleUpload}>
          <AddIcon color="inherit" />
        </IconButton>
      </Grid>

      {/* show upload modal */}
      {dialog}
    </Grid>
  );
};
