import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import { Typography, Grid } from '../';
import { HistoryIcon } from '../icons';
import { useLocale } from 'hooks';

import { LastUpdatedProps } from './LastUpdated.types';
import { useStyles } from './LastUpdated.styles';

export const LastUpdated = ({ dateUpdated, updatedBy, className, withIcon }: LastUpdatedProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid className={className} container alignItems="center">
      <Typography className={classes.text}>{formatMessage({ id: 'common.last_updated' })}:</Typography>
      <Typography className={classNames(classes.text, classes.bold)}>
        {dateUpdated
          ? DateTime.fromISO(dateUpdated).toFormat('dd-mm-yyyy, hh:mm')
          : formatMessage({ id: 'common.never_updated' })}
      </Typography>
      {updatedBy && (
        <Typography className={classNames(classes.text, classes.bold)}>
          {formatMessage({ id: 'common.updated_by' })} {updatedBy.firstName} {updatedBy.lastName}
        </Typography>
      )}
      {withIcon && <HistoryIcon className={classes.icon} />}
    </Grid>
  );
};
