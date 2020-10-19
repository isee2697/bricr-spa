import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography, Card, CardContent } from 'ui/atoms';

import { useStyles } from './DmsDashboardMetaHeader.styles';
import { DmsDashboardMetaBoxProps, DmsDashboardMetaHeaderProps } from './DmsDashboardMetaHeader.types';

const DmsDashboardMetaBox = ({ label, count }: DmsDashboardMetaBoxProps) => {
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

export const DmsDashboardMetaHeader = ({ meta }: DmsDashboardMetaHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={1} className={classes.root}>
      {Object.entries(meta).map(([label, value], index) => (
        <Grid key={index} item xs={2}>
          <DmsDashboardMetaBox key={label} label={formatMessage({ id: `dms.item.meta.${label}` })} count={value} />
        </Grid>
      ))}
    </Grid>
  );
};
