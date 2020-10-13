import React from 'react';
import { Card, CardHeader, CardContent, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './DeedOfPurchaseHouse.styles';

export const DeedOfPurchaseHouse = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.personal.deed_of_purchase_house.title' })} />
      <CardContent>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.personal.deed_of_purchase_house.deed_of_sale_with_age_clause' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Yes
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({
              id: 'pim_details.summary.personal.deed_of_purchase_house.deed_of_sale_with_asbestos_clause',
            })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Yes
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
