import React from 'react';

import { Box, Typography } from 'ui/atoms';
import { EuroIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { ParkingLotProps } from '../OutsideSpaces.types';
import { useStyles } from '../OutsideSpaces.styles';

export const ParkingLot = ({ configuration: { price, number, cost } }: ParkingLotProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {price && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.price' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {price} <EuroIcon className={classes.detailItemIcon} />
          </Typography>
        </Box>
      )}
      {number && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.number' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {number}
          </Typography>
        </Box>
      )}
      {cost && (
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.cost' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            {cost} <EuroIcon className={classes.detailItemIcon} />
          </Typography>
        </Box>
      )}
    </>
  );
};
