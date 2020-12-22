import React from 'react';
import { DateTime } from 'luxon';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { Card, CardContent, Chip, Grid, Typography, Box } from 'ui/atoms';

export const Prices = () => {
  const { formatMessage } = useLocale();
  const theme = useTheme();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h6" color="textSecondary">
              {formatMessage({ id: 'sales.invoice.prices.subtotal' })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">€ 1295</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h6" color="textSecondary">
              {formatMessage({ id: 'sales.invoice.prices.discount' })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">€ 1295</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h6" color="textSecondary">
              {formatMessage({ id: 'sales.invoice.prices.tax' })}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">€ 395</Typography>
          </Grid>
        </Grid>
        <Box mt={7}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="h3">{formatMessage({ id: 'sales.invoice.prices.total' })}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">€ 4295</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">{formatMessage({ id: 'sales.invoice.prices.paid' })}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Chip
                size="small"
                bgcolor={theme.palette.success.main}
                fontcolor={theme.palette.white.main}
                label={DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
