import React, { useState } from 'react';
import { IconButton } from 'ui/atoms';
import { ListIcon, CardsIcon, LocationIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';

import { useStyles } from './CrmSubHeader.style';

export const CrmSubHeader = () => {
  const classes = useStyles();
  const [viewMode, setViewMode] = useState('cards');

  return (
    <>
      <IconButton
        variant="rounded"
        size="small"
        classes={{ root: classes.sortIcon }}
        onClick={() => setViewMode('cards')}
      >
        <CardsIcon color={viewMode === 'cards' ? 'primary' : 'inherit'} />
      </IconButton>
      <IconButton
        variant="rounded"
        size="small"
        classes={{ root: classes.sortIcon }}
        onClick={() => setViewMode('list')}
      >
        <ListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
      </IconButton>
      <IconButton variant="rounded" size="small" classes={{ root: classes.sortIcon }}>
        <LocationIcon color="inherit" />
      </IconButton>
      <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
        <ManageIcon color="inherit" />
      </IconButton>
      <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
        <SearchIcon color="inherit" />
      </IconButton>
    </>
  );
};
