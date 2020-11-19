import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography, Card, CardContent } from 'ui/atoms';

import { useStyles } from './MetaHeader.styles';
import { MetaBoxProps, MetaHeaderProps } from './MetaHeader.types';

const MetaBox = ({ label, count }: MetaBoxProps) => {
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

export const MetaHeader = ({ matches, interests, viewings, biddings, candidate, optant }: MetaHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const metaAsArray = [
    {
      label: 'matches',
      count: matches,
    },
    {
      label: 'interests',
      count: interests,
    },
    {
      label: 'viewings',
      count: viewings,
    },
    {
      label: 'biddings',
      count: biddings,
    },
    {
      label: 'candidate',
      count: candidate,
    },
    {
      label: 'optant',
      count: optant,
    },
  ];

  return (
    <Grid container spacing={1} className={classes.root}>
      {metaAsArray.map((meta, index) => (
        <Grid key={index} item xs={2}>
          <MetaBox
            key={meta.label}
            label={formatMessage({ id: `sales_details.item.meta.${meta.label}` })}
            count={meta.count}
          />
        </Grid>
      ))}
    </Grid>
  );
};
