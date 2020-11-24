import React from 'react';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, IconButton, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HideIcon, MenuIcon, ShareIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './AllocateResultsDetails.styles';
import { Stats } from './stats/Stats';
import { AllocateResultsList } from './list/List';
import { AllocateResultsDetailsProps } from './AllocateResultsDetails.types';

export const AllocateResultsDetails = ({ isSidebarVisible, onSidebarOpen }: AllocateResultsDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { params } = useRouteMatch();

  const handleNavigateToResults = () => {
    push(joinUrlParams(`${AppRoute.pimDetails}/allocateResults`, params));
  };

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
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
              {formatMessage({ id: 'pim_details.allocate_results_details.allocate_result' })}:
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.fontWeightBold}>
            {formatMessage(
              { id: 'pim_details.allocate_results_details.allocated_by' },
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
          <IconButton size="small" variant="rounded">
            <MenuIcon />
          </IconButton>
          <IconButton size="small" variant="rounded" onClick={handleNavigateToResults}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
      <Page withoutHeader>
        <Stats before={20} after={10} percentage={15} />
        <AllocateResultsList />
      </Page>
    </>
  );
};
