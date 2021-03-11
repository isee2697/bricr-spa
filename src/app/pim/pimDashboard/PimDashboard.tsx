import React from 'react';

import { Box, Grid, NavBreadcrumbs, Typography, DocumentViewer } from 'ui/atoms';
import { PimDashBoardProps } from 'app/pim/pimDashboard/PimDashboard.types';
import { useLocale } from 'hooks';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';

import { useStyles } from './PimDashboard.styles';
import { PimDashboardMetaHeader } from './metaHeader/MetaHeader';
import { NewInterestsContainer } from './newInterests/NewInterestsContainer';
import { NewBiddingsContainer } from './newBiddings/NewBiddingsContainer';
import { SoldContainer } from './sold/SoldContainer';
import { NewSalesContainer } from './newSales/NewSalesContainer';
import { PimDashboardFilters } from './dictionaries';

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
            <FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={PimDashboardFilters} />
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
          <DocumentViewer
            documents={[
              { uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
              { uri: 'https://bricr-ui-web.s3-eu-west-1.amazonaws.com/Test-word-doc.docx' },
            ]}
            // config={{ header: { disableFileName: true } }}
          />
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
