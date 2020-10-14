import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Typography, Box } from 'ui/atoms';

import { useStyles } from './SalesOrder.styles';
export const SalesOrder = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.personal.sales_order.title' })} />
      <CardContent>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.personal.sales_order.date_sales_order' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            12-05-2020
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.personal.sales_order.ordernumber' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            A320099
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.personal.sales_order.dossiernumber' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            9088765B
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
