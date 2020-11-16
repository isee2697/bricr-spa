import React from 'react';
import { DateTime } from 'luxon';

import { Box, Card, CardContent, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { BuildingIcon } from 'ui/atoms/icons';

import { LInkedItemsProps } from './LInkedItems.types';
import { useStyles } from './LinkedItems.styles';

export const LinkedItems = ({
  pimObjects = [],
  relations = [],
  salesOrders = [],
  calendars = [],
}: LInkedItemsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" mt={2} className={classes.root}>
      {pimObjects.length > 0 && (
        <Box mr={1.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={classes.fontWeightMedium}>
                {formatMessage({ id: 'email.linked_pim_objects' })}
              </Typography>
              <Box mt={0.5} className={classes.itemsWrapper}>
                {pimObjects?.map(pim => (
                  <Box key={pim.id} display="flex" alignItems="center" className={classes.item}>
                    <Box className={classes.itemIcon}>
                      <BuildingIcon color="error" fontSize="small" />
                    </Box>
                    <Box ml={1} />
                    <Typography variant="h6" className={classes.fontWeightMedium}>
                      {pim.street}, {pim.city}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {relations.length > 0 && (
        <Box mr={1.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={classes.fontWeightMedium}>
                {formatMessage({ id: 'email.linked_relations' })}
              </Typography>
              <Box mt={0.5} className={classes.itemsWrapper}>
                {relations?.map(relation => (
                  <Box key={relation.id} display="flex" alignItems="center" className={classes.item}>
                    <Box className={classes.itemIcon}>
                      <BuildingIcon color="error" fontSize="small" />
                    </Box>
                    <Box ml={1} />
                    <Typography variant="h6" className={classes.fontWeightMedium}>
                      {relation.firstName} {relation.lastName}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {salesOrders.length > 0 && (
        <Box mr={1.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={classes.fontWeightMedium}>
                {formatMessage({ id: 'email.linked_sales_orders' })}
              </Typography>
              <Box mt={0.5} className={classes.itemsWrapper}>
                {salesOrders?.map(salesOrder => (
                  <Box key={salesOrder.id} display="flex" alignItems="center" className={classes.item}>
                    <Box className={classes.itemIcon}>
                      <BuildingIcon color="error" fontSize="small" />
                    </Box>
                    <Box ml={1} />
                    <Typography variant="h6" className={classes.fontWeightMedium}>
                      {salesOrder.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
      {calendars.length > 0 && (
        <Box mr={1.5}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={classes.fontWeightMedium}>
                {formatMessage({ id: 'email.liked_calendars' })}
              </Typography>
              <Box mt={0.5} className={classes.itemsWrapper}>
                {calendars?.map((calendar, index) => (
                  <Box key={index} display="flex" alignItems="center" className={classes.item}>
                    <Box className={classes.itemIcon}>
                      <BuildingIcon color="error" fontSize="small" />
                    </Box>
                    <Box ml={1} />
                    <Typography variant="h6" className={classes.fontWeightMedium}>
                      {calendar.toLocaleString(DateTime.DATE_SHORT)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};
