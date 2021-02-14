import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, Grid, RankingIcon, Typography } from 'ui/atoms';
import { ClockIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AllocateResultsRelationRanking } from '../../../allocateResultsDetails/AllocateResultsDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({ checked, checkbox, item }: ListItemProps) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { params } = useRouteMatch();
  const { formatMessage } = useLocale();

  const handleNavigateToDetails = () => {
    push(joinUrlParams(`${AppRoute.projectDetails}/allocateResults/${item.id}`, params));
  };

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box onClick={handleNavigateToDetails} className={classes.rowItem} display="flex" flexDirection="row">
        <Grid container>
          <Grid item xs={2}>
            <Box mb={1.5}>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.allocated_to' })}
              </Typography>
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {item.assignee}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.date' })}
              </Typography>
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {item.date.toLocaleString(DateTime.DATE_SHORT)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box mb={1}>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'project.details.allocate_results.one_hour_ago' })}
              </Typography>
              <Typography variant="h5" className={classes.fontWeightMedium}>
                {item.name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <RankingIcon
                rankings={[
                  AllocateResultsRelationRanking.Gold,
                  AllocateResultsRelationRanking.Bronze,
                  AllocateResultsRelationRanking.Silver,
                ]}
                count={{
                  gold: item.relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Gold)
                    .length,
                  silver: item.relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Silver)
                    .length,
                  bronze: item.relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Bronze)
                    .length,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.gray}>
              {formatMessage({ id: 'project.details.allocate_results.based_on' })}
            </Typography>
            <Typography variant="h5" className={classes.fontWeightMedium}>
              {item.allocationBase}
            </Typography>
            <Box mt="auto" display="flex" justifyContent="space-between" alignItems="flex-end">
              <Box mt={1.5}>
                <Typography variant="h6" className={classes.gray}>
                  {formatMessage({ id: 'project.details.allocate_results.allocated_properties' })}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="h3" className={clsx(classes.fontWeightMedium, classes.green)}>
                    {item.relations.filter(relation => relation.allocated).length}
                  </Typography>
                  <Box ml={1.5}>
                    <Typography variant="h5" className={classes.fontWeightMedium}>
                      {(item.relations.filter(relation => relation.allocated).length / item.relations.length) * 100}%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box display="flex">
                <Box className={classes.before}>{item.assigned}</Box>
                <Box ml={2.5} className={classes.after}>
                  {item.unassigned}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mr={2.5}>
          <ListOptionsMenu id={`allocate-results-menu-${item.id}`} onDeleteClick={() => {}} hideEditButton>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'project_details.allocateResults.viewSettings',
              })}
              icon={<ClockIcon />}
            />
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'project_details.allocateResults.viewResult',
              })}
              icon={<ClockIcon />}
              onClick={handleNavigateToDetails}
            />
          </ListOptionsMenu>
        </Box>
      </Box>
    </Box>
  );
};
