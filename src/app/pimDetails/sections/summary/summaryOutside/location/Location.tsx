import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { MutationIcon } from 'ui/atoms/icons';

import { useStyles } from './Location.styles';
import { LocationProps } from './Location.types';

export const Location = ({ goodToKnows }: LocationProps) => {
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
            {formatMessage({ id: goodToKnows.length > 0 ? 'common.yes' : 'common.no' })}
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.location.nearby_places' })}
          </Typography>
          {goodToKnows.map((goodToKnow, index) => (
            <Typography variant="h4" className={classes.detailItemValue}>
              <MutationIcon className={classes.detailItemIcon} />
              {goodToKnow.type}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
