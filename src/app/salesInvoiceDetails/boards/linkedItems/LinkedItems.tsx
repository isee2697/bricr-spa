import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, Typography } from 'ui/atoms';
import { BuildingIcon } from 'ui/atoms/icons';

import { useStyles } from './LinkedItems.styles';

export const LinkedItems = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box mr={1.5}>
        <Card>
          <CardContent>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'sales.invoice.linked_linked_pim_objects' })}
            </Typography>
            <Box mt={0.5} className={classes.itemsWrapper}>
              <Box display="flex" alignItems="center" className={classes.item}>
                <Box className={classes.itemIcon}>
                  <BuildingIcon color="error" fontSize="small" />
                </Box>
                <Box ml={1} />
                <Typography variant="h6" className={classes.fontWeightMedium}>
                  Isenburgstraat 36, Breda
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mr={1.5}>
        <Card>
          <CardContent>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'sales.invoice.linked_relations' })}
            </Typography>
            <Box mt={0.5} className={classes.itemsWrapper}>
              <Box display="flex" alignItems="center" className={classes.item}>
                <Box className={classes.itemIcon}>
                  <BuildingIcon color="error" fontSize="small" />
                </Box>
                <Box ml={1} />
                <Typography variant="h6" className={classes.fontWeightMedium}>
                  C. van Gils
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mr={1.5}>
        <Card>
          <CardContent>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'sales.invoice.linked_sales_orders' })}
            </Typography>
            <Box mt={0.5} className={classes.itemsWrapper}>
              <Box display="flex" alignItems="center" className={classes.item}>
                <Box className={classes.itemIcon}>
                  <BuildingIcon color="error" fontSize="small" />
                </Box>
                <Box ml={1} />
                <Typography variant="h6" className={classes.fontWeightMedium}>
                  Appraisal Weerschijnvlinder
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mr={1.5}>
        <Card>
          <CardContent>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'sales.invoice.linked_calendar' })}
            </Typography>
            <Box mt={0.5} className={classes.itemsWrapper}>
              <Box display="flex" alignItems="center" className={classes.item}>
                <Box className={classes.itemIcon}>
                  <BuildingIcon color="error" fontSize="small" />
                </Box>
                <Box ml={1} />
                <Typography variant="h6" className={classes.fontWeightMedium}>
                  {DateTime.local().toLocaleString(DateTime.DATETIME_SHORT)}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
