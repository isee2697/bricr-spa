import React from 'react';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, Typography } from 'ui/atoms';
import { ArrowRightIcon } from 'ui/atoms/icons';

import { StatsProps } from './Stats.types';
import { useStyles } from './Stats.styles';

export const Stats = ({ before, after, percentage }: StatsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h6" color="textSecondary">
          {formatMessage({ id: 'pim_details.allocate_results_details.relations_before_after_allocate' })}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Typography variant="h4" className={classes.fontWeightMedium}>
              {before}
            </Typography>
            <Box mr={2} />
            <ArrowRightIcon />
            <Box mr={2} />
            <Typography variant="h2" className={classes.fontWeightBolder}>
              {after}
            </Typography>
          </Box>
          <Typography variant="h2">{percentage}%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
