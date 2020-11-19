import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, Grid, IconButton, RankingIcon, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AllocateResultsRelationRanking } from '../../../allocateResultsDetails/AllocateResultsDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({ checked, checkbox, item }: ListItemProps) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { params } = useRouteMatch();
  const { formatMessage } = useLocale();
  const { id, name, assignee, date, relations, sortOrders } = item;

  const handleNavigateToDetails = () => {
    push(joinUrlParams(`${AppRoute.pimDetails}/allocateResults/${id}`, params));
  };

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box onClick={handleNavigateToDetails} className={classes.rowItem}>
        <Grid container>
          <Grid item xs={2}>
            <Box mb={1.5}>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.allocated_to' })}
              </Typography>
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {assignee}
              </Typography>
            </Box>
            <Box mt={1.5}>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.date' })}
              </Typography>
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {date.toLocaleString(DateTime.DATE_SHORT)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.one_hour_ago' })}
              </Typography>
              <Typography variant="h4" className={classes.fontWeightBold}>
                {name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <RankingIcon
                rankings={[
                  AllocateResultsRelationRanking.Gold,
                  AllocateResultsRelationRanking.Bronze,
                  AllocateResultsRelationRanking.Silver,
                ]}
                showCount
                count={{
                  gold: relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Gold).length,
                  silver: relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Silver)
                    .length,
                  bronze: relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Bronze)
                    .length,
                }}
              />
              <Box ml={1.5}>
                <Typography variant="h6" className={clsx(classes.gray, classes.fontWeightBold)}>
                  + {relations.length}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.gray}>
              {formatMessage({ id: 'project.details.allocate_results.sort_orders' })}
            </Typography>
            {sortOrders.map((sortOrder, index) => (
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {index + 1}. {formatMessage({ id: `project.details.allocate_results.sort_orders.${sortOrder}` })}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box mr={2.5}>
        <IconButton size="small" variant="rounded">
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
