import React from 'react';

import { Box, IconButton } from 'ui/atoms';
import { ListIcon, LocationIcon, SearchIcon, HamburgerIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';

import { useStyles } from './CrmSubHeader.style';
import { CrmSubHeaderProps } from './CrmSubHeader.types';

export const CrmSubHeader = ({ viewMode = 'list', setViewMode, activeFilters, onFilter }: CrmSubHeaderProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
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
      <Box ml={3} />
      <FiltersButton color="primary" data={activeFilters} getActiveFilters={onFilter} />
      <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
        <SearchIcon color="inherit" />
      </IconButton>
    </Box>
  );
};
