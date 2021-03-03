import clsx from 'classnames';
import React from 'react';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, ScrollableHorizontal, Typography } from 'ui/atoms';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from 'ui/atoms/icons';

import { MetaItem, MetaProps } from './Meta.types';
import { useStyles } from './Meta.styles';

const MetaBox = ({ item: { label, count, percentage } }: MetaProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const status = percentage >= 80 ? 'success' : percentage >= 50 ? 'warning' : 'error';

  return (
    <Card className={classes.meta}>
      <CardContent className={classes.metaContent}>
        <Typography variant="h6" className={classes.metaLabel}>
          {formatMessage({ id: `crm.details.marketing_newsletter.meta.${label}` })}
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
      label: 'bounced',
      count: 1,
      percentage: 15,
    },
    {
      label: 'opened_read',
      count: 2,
      percentage: 0,
    },
    {
      label: 'click_through',
      count: 3,
      percentage: 90,
    },
    {
      label: 'form_filled_in',
      count: 1,
      percentage: 5,
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
