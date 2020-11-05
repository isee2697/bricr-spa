import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Box, Grid, IconButton, RankingIcon, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AllocateResultsRelationRanking } from '../../../allocateResultsDetails/AllocateResultsDetails.types';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({ checked, checkbox, item }: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box className={classes.rowItem}>
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
            <Grid container>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <RankingIcon
                    rankings={[
                      AllocateResultsRelationRanking.Gold,
                      AllocateResultsRelationRanking.Bronze,
                      AllocateResultsRelationRanking.Silver,
                    ]}
                    showCount
                    count={{
                      gold: item.relations.filter(relation => relation.ranking === AllocateResultsRelationRanking.Gold)
                        .length,
                      silver: item.relations.filter(
                        relation => relation.ranking === AllocateResultsRelationRanking.Silver,
                      ).length,
                      bronze: item.relations.filter(
                        relation => relation.ranking === AllocateResultsRelationRanking.Bronze,
                      ).length,
                    }}
                  />
                  <Box ml={1.5}>
                    <Typography variant="h6" className={clsx(classes.gray, classes.fontWeightBold)}>
                      + {item.relations.length}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.gray}>
              {formatMessage({ id: 'project.details.allocate_results.sort_orders' })}
            </Typography>
            {item.sortOrders.map((sortOrder, index) => (
              <Typography variant="h5" className={classes.fontWeightBold}>
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
