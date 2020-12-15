import clsx from 'classnames';
import React from 'react';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, ScrollableHorizontal, Typography } from 'ui/atoms';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from 'ui/atoms/icons';

import { MetaItem, MetaProps } from './Meta.types';
import { useStyles } from './Meta.styles';

const MetaBox = ({ item: { label, count, percentage, status } }: MetaProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.meta}>
      <CardContent className={classes.metaContent}>
        <Typography variant="h6" className={classes.metaLabel}>
          {formatMessage({ id: `sales.dashboard.meta.${label}` })}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h3" className={clsx(classes.metaCount, status)}>
            {count}
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography variant="h6">{percentage}%</Typography>
              <Box className={clsx(classes.metaStatusIcon, status)}>
                {status === 'success' && <ArrowUpIcon color="inherit" />}
                {status === 'warning' && <ArrowRightIcon color="inherit" />}
                {status === 'error' && <ArrowDownIcon color="inherit" />}
              </Box>
            </Box>
            <Typography variant="h6" className={classes.metaDays}>
              {formatMessage({ id: 'crm.details.sales.dashboard.meta.previous_last_7_days' })}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export const Meta = () => {
  const classes = useStyles();
  const theme = useTheme();
  const metaAsArray: MetaItem[] = [
    {
      label: 'leads',
      count: 45,
      percentage: 15,
      status: 'success',
    },
    {
      label: 'acquisition',
      count: 22,
      percentage: 0,
      status: 'warning',
    },
    {
      label: 'quotation',
      count: 8,
      percentage: 90,
      status: 'error',
    },
    {
      label: 'orders',
      count: 4,
      percentage: 5,
      status: 'success',
    },
  ];

  return (
    <ScrollableHorizontal width="100%" maxWidth="100%" height={theme.spacing(12)}>
      <Box className={classes.metaWrapper}>
        {metaAsArray.map((meta, index) => (
          <MetaBox key={index} item={meta} />
        ))}
      </Box>
    </ScrollableHorizontal>
  );
};
