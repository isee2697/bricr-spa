import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, IconButton, Box, Avatar, Emoji, Typography, Grid } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

import { SalesBroker, SalesBrokerItemProps } from './SalesBrokers.types';
import { useStyles } from './SalesBrokers.styles';

const SalesBrokerItem = ({ salesBroker: { avatar, name, id, email } }: SalesBrokerItemProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" width="100%" className={classes.brokerItem}>
      <Box mr={2}>
        <Avatar variant="rounded" size="medium" src={avatar} className={classes.brokerImage}>
          {!avatar && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width="100%">
        <Typography variant="h3" className={classes.brokerTitle}>
          {name}
        </Typography>
        <Typography variant="h5" className={classes.brokerId}>
          {id}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {email}
        </Typography>
      </Box>
    </Box>
  );
};

export const PimDetailsDashboardBoardsSalesBrokers = () => {
  const { formatMessage } = useLocale();

  const brokers: SalesBroker[] = [
    {
      name: 'Hans Janssens Amersfoort',
      avatar:
        'data:image/jpeg;base64,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',
      id: '06-48764044',
      email: 'hans@email.com',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'pim_details.dashboard.brokers' })}
        action={
          <IconButton aria-label="add" color="primary" size="small">
            <AddIcon color="inherit" />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          {brokers.map((broker, index) => (
            <Grid item xs={12} md={6}>
              <SalesBrokerItem key={index} salesBroker={broker} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
