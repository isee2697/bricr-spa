import React from 'react';
import { DateTime } from 'luxon';

import { Box, IconButton, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HelpIcon, MenuIcon, ShareIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { useStyles } from './AllocateResultsDetails.styles';
import { Stats } from './sections/stats/Stats';
import { Analytics } from './sections/analytics/Analytics';
import { Graph } from './sections/graph/Graph';
import { AllocateResultsList } from './list/List';

export const AllocateResultsDetails = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <Box mr={0.5}>
            <Typography variant="h5">
              {formatMessage({ id: 'project_details.allocate_results_details.allocate_result' })}:
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.bold}>
            {formatMessage(
              { id: 'project_details.allocate_results_details.allocated_by' },
              {
                date: `${DateTime.local().toLocaleString(DateTime.DATE_HUGE)} ${DateTime.local().toLocaleString(
                  DateTime.TIME_WITH_SECONDS,
                )}`,
                by: 'Margot Janssens',
              },
            )}
          </Typography>
        </Box>
        <Box display="flex">
          <Box mr={0.5}>
            <IconButton size="small" variant="roundedContained">
              <HelpIcon />
            </IconButton>
          </Box>
          <Box mr={0.5}>
            <IconButton size="small" variant="roundedContained">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton size="small" variant="roundedContained">
              <ShareIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Page withoutHeader>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stats />
          </Grid>
          <Grid item xs={4}>
            <Analytics />
          </Grid>
          <Grid item xs={8}>
            <Graph />
          </Grid>
          <Grid item xs={12}>
            <AllocateResultsList />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
