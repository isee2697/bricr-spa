import React from 'react';
import classNames from 'classnames';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { InfoItemProps } from './InfoItem.types';
import { useStyles } from './InfoItem.styles';

export const InfoItem = ({ amount, labelId, className, color, ...props }: InfoItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid item className={classNames(classes.root, className, color)} {...props}>
      <Typography variant="h3">{amount}</Typography>
      <Typography variant="h6">{formatMessage({ id: labelId })}</Typography>
    </Grid>
  );
};
