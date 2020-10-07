import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './HotWaterSupplies.styles';

export const HotWaterSupplies = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.inside.hot_water_supplies.title' })}
            </Typography>
            <Counter count={1} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Boiler</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.hot_water_supplies.name' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Ericson
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.hot_water_supplies.year_of_installation' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1991
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.hot_water_supplies.fuel' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Electric
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.inside.hot_water_supplies.ownership' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Owned
            </Typography>
          </Box>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
