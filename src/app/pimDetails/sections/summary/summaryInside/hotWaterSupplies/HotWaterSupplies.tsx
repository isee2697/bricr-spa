import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { HotWaterSupplyConfiguration } from 'api/types';

import { useStyles } from './HotWaterSupplies.styles';
import { HotWaterSuppliesProps } from './HotWaterSupplies.types';

export const HotWaterSupplies = ({ hotWaterSupplies }: HotWaterSuppliesProps) => {
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
            <Counter count={hotWaterSupplies.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {hotWaterSupplies.map((hotWaterSupply, index) => (
          <FormSubSection
            key={index}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `dictionaries.hot_water_supply_type.${hotWaterSupply.configuration.type}` })}
                </Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.hot_water_supply.name' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {hotWaterSupply.name}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.hot_water_supply.year_of_installation' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {hotWaterSupply.yearOfInstallation}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.hot_water_supply.fuel' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {formatMessage({
                    id: `dictionaries.hot_water_supply.fuel_type.${
                      (hotWaterSupply.configuration as HotWaterSupplyConfiguration).fuel
                    }`,
                  })}
                </Typography>
              </Box>
              <Box className={classes.detailItem}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.inside.hot_water_supply.ownership' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {formatMessage({ id: `dictionaries.ownership.${hotWaterSupply.ownership}` })}
                </Typography>
              </Box>
            </>
          </FormSubSection>
        ))}
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
