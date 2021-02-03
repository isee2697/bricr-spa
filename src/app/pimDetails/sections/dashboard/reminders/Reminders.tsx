import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Grid, Typography, UserAvatar } from 'ui/atoms';

import { useStyles } from './Reminders.styles';

export const Reminders = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const reminderInfo = {
    user: {
      name: 'Christian van Gils',
    },
    conditions: 4,
    signed: DateTime.local(),
    daysLeft: 3,
    askingPrice: 245000,
    salesPrice: 255495,
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.dashboard.reminders' })} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'pim_details.dashboard.reminders.reflection_period_for' })}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Box display="flex" alignItems="center">
                  <UserAvatar avatar={reminderInfo.user.name} name={reminderInfo.user.name} />
                  <Box ml={1} />
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {reminderInfo.user.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'pim_details.dashboard.reminders.resolutive_conditions' })}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h5" className={classes.fontWeightBold}>
                  {reminderInfo.conditions}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'pim_details.dashboard.reminders.signed' })}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classes.fontWeightBold}>
                  {reminderInfo.signed.toLocaleString(DateTime.DATETIME_FULL)}
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={8}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {formatMessage(
                      { id: 'pim_details.dashboard.reminders.days_left' },
                      {
                        days: (
                          <Typography variant="h3" color="error">
                            {reminderInfo.daysLeft}
                          </Typography>
                        ),
                      },
                    )}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'pim_details.dashboard.reminders.asking_price' })}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={classes.fontWeightBold}>
                  € {reminderInfo.askingPrice}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'pim_details.dashboard.reminders.sales_price' })}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h5" className={clsx(classes.fontWeightBold, classes.success)}>
                  € {reminderInfo.salesPrice}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
