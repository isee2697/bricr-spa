import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { MutationIcon } from 'ui/atoms/icons';

import { useStyles } from './Location.styles';

export const Location = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.outside.location.title' })} />
      <CardContent>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.location.neighbours' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Yes
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.location.nearby_places' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} /> Middle School
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} /> High School
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} /> Metro
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} /> Restaurant
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            <MutationIcon className={classes.detailItemIcon} /> Convinient Store
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
