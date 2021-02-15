import React from 'react';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, IconButton, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ExitIcon, ClockIcon, HideIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { NCP_MATCH_ALLOCATED_PROPERTIES } from 'api/mocks/ncp-list';

import { useStyles } from './AllocateResultsDetails.styles';
import { Stats } from './sections/stats/Stats';
import { Analytics } from './sections/analytics/Analytics';
import { Graph } from './sections/graph/Graph';
import { AllocateResultsList } from './list/List';
import { AssignedTableView } from './list/assignedTableView/AssignedTableView';
import { AllocateResultsDetailsProps } from './AllocateResultsDetails.types';

export const AllocateResultsDetails = ({ isSidebarVisible, onSidebarOpen }: AllocateResultsDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { params } = useRouteMatch<{ id: string }>();

  const handleNavigateToResults = () => {
    push(joinUrlParams(`${AppRoute.projectDetails}/allocateResults`, params));
  };

  const item = NCP_MATCH_ALLOCATED_PROPERTIES[0];

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onSidebarOpen}
              size="small"
              variant="roundedContained"
            >
              <HideIcon />
            </IconButton>
          )}
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
          <ListOptionsMenu id={`allocate-results-details-menu`} onDeleteClick={() => {}} hideEditButton>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'project_details.allocateResults.viewSettings',
              })}
              icon={<ClockIcon />}
            />
          </ListOptionsMenu>
          <Box ml={1.5} />
          <IconButton size="small" variant="rounded" onClick={handleNavigateToResults}>
            <ExitIcon />
          </IconButton>
        </Box>
      </Box>
      <Page withoutHeader>
        <Box my={2}>
          <Typography variant="h2">
            {formatMessage({ id: `project_details.allocate_criteria.title` })}
            &nbsp;<b>{item.allocationBase}</b>
          </Typography>
        </Box>
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
          <Grid item xs={12}>
            <AssignedTableView
              type="unassigned"
              properties={item.allocatedRelations || []}
              onClick={() => {}}
              selected={[]}
              onSelectProperty={id => {}}
              onSelectAllProperties={() => {}}
            />
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
