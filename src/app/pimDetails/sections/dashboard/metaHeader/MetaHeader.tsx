import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, Grid, Typography } from 'ui/atoms';

import { useStyles } from './MetaHeader.styles';

const MetaBox = ({ label, count }: { label: string; count: number }) => {
  const classes = useStyles();

  return (
    <Card className={classes.meta}>
      <CardContent>
        <Typography className={classes.metaCount} variant="h3">
          {count}
        </Typography>
        <Typography className={classes.metaLabel} variant="h6">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const MetaHeader = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const metaAsArray = [
    {
      label: 'matches',
      count: 5,
    },
    {
      label: 'interests',
      count: 5,
    },
    {
      label: 'viewings',
      count: 5,
    },
    {
      label: 'biddings',
      count: 5,
    },
    {
      label: 'candidate',
      count: 5,
    },
    {
      label: 'optant',
      count: 5,
    },
  ];

  return (
    <Grid container spacing={1} className={classes.root}>
      {metaAsArray.map((meta, index) => (
        <Grid key={index} item xs={2}>
          <MetaBox
            key={meta.label}
            label={formatMessage({ id: `pim_details.dashboard.meta.${meta.label}` })}
            count={meta.count}
          />
        </Grid>
      ))}
    </Grid>
  );
};
