import React from 'react';

import { IconButton } from 'ui/atoms';
import { ListIcon, LocationIcon, ManageIcon, SearchIcon, HamburgerIcon } from 'ui/atoms/icons';

import { useStyles } from './CrmSubHeader.style';
import { CrmSubHeaderProps } from './CrmSubHeader.types';

export const CrmSubHeader = ({ viewMode = 'list', setViewMode }: CrmSubHeaderProps) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        variant="rounded"
        size="small"
        classes={{ root: classes.sortIcon }}
        onClick={() => setViewMode('list')}
      >
        <ListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
      </IconButton>
      <IconButton
        variant="rounded"
        size="small"
        classes={{ root: classes.sortIcon }}
        onClick={() => setViewMode('table')}
      >
        <HamburgerIcon color={viewMode === 'table' ? 'primary' : 'inherit'} />
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
