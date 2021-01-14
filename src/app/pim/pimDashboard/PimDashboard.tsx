import React from 'react';

import { Box, Grid, NavBreadcrumbs, Typography } from 'ui/atoms';
import { PimDashBoardProps } from 'app/pim/pimDashboard/PimDashboard.types';
import { useLocale } from 'hooks';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';

import { PimDashboardFiltersButton } from './filters/FiltersButton';
import { useStyles } from './PimDashboard.styles';
import { PimDashboardMetaHeader } from './metaHeader/MetaHeader';
import { NewInterestsContainer } from './newInterests/NewInterestsContainer';
import { NewBiddingsContainer } from './newBiddings/NewBiddingsContainer';
import { SoldContainer } from './sold/SoldContainer';
import { NewSalesContainer } from './newSales/NewSalesContainer';

export const PimDashboard = ({ breadcrumbs, activeFilters, onFilter }: PimDashBoardProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      {breadcrumbs}
      <Box m={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <NavBreadcrumbs />
          <Box display="flex" alignItems="center">
            <PimDashboardFiltersButton data={activeFilters} getActiveFilters={onFilter} />
          </Box>
        </Box>
        <Box mt={3}>
          <Typography variant="h1">{formatMessage({ id: 'pim.dashboard.portfolio' })}</Typography>
        </Box>
        {Object.keys(activeFilters).length > 0 && (
          <Box mt={3}>
            <ActiveFilters<ListPimsFilters>
              activeFilters={activeFilters}
              onDelete={onFilter}
              className={classes.filtersPanel}
            />
          </Box>
        )}
        <Box mt={3}>
          <PimDashboardMetaHeader />
        </Box>
        <Box mt={3}>
          <NewInterestsContainer />
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <NewBiddingsContainer />
            </Grid>
            <Grid item xs={6}>
              <SoldContainer />
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <NewSalesContainer />
        </Box>
      </Box>
    </>
  );
};
