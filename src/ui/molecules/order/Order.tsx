import React from 'react';
import { useTheme } from '@material-ui/core';
import { FormattedNumber } from 'react-intl';

import { Box, Typography, Chip, Avatar } from 'ui/atoms';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { OrderProps } from './Order.types';
import { useStyles } from './Order.styles';

export const Order = ({ labels, price, packages, image, children, onClick, id }: OrderProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" flexWrap="wrap" py={2} className={classes.wrapper} id={id} onClick={() => onClick(id)}>
      <Box display="flex" width="100%" flexWrap="wrap" alignItems="center">
        <Avatar variant="rounded" src={image} className={classes.image} />
        <Box display="flex" flexGrow={1}>
          <Box flexGrow={1} className={classes.children}>
            <Box mb={1}>{children}</Box>
            <Box display="flex">
              {labels.map(label => (
                <Box key={label} mr={1} color={theme.palette.gray.main}>
                  <Chip variant="outlined" color="primary" label={label} size="small" />
                </Box>
              ))}
            </Box>
          </Box>
          <Box textAlign="right">
            <Typography className={classes.package}>
              {formatMessage({ id: AppMessages['order.package'] })} {packages}
            </Typography>
            <Typography className={classes.price}>
              <FormattedNumber value={price} style={`currency`} currency="EUR" />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
