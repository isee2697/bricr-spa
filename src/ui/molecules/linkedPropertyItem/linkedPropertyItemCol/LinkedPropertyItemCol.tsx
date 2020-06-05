import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { LinkedPropertyItemColProps } from '../LinkedPropertyItem.types';
import { useStyles } from '../LinkedPropertyItem.styles';

export const LinkedPropertyItemCol = ({ labelId, title }: LinkedPropertyItemColProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid item md={4}>
      <Typography className={classes.subTitle} variant="h6">
        {formatMessage({ id: labelId })}
      </Typography>
      <Typography variant="h5" className={classes.shortTitle}>
        {title}
      </Typography>
    </Grid>
  );
};
