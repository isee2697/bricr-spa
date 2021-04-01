import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { Avatar, Box, Emoji, IconButton, ProgressFilling, Typography, Grid } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { ListItemBuyerProps } from './ListItemBuyer.types';
import { useStyles } from './ListItemBuyer.styles';

export const ListItemBuyer = ({ item }: ListItemBuyerProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { index } = item;

  return (
    <Box className={classes.row}>
      <Box display="flex" className={classes.rowItem}>
        <Box>
          <Typography variant="h6" className={classes.itemNo}>
            {index + 1}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" width="100%">
          <Box display="flex" width="100%">
            <Box>
              <Avatar variant="rounded" src={item.image} className={classes.image}>
                {!item.image && <Emoji>{'📷'}</Emoji>}
              </Avatar>
            </Box>
            <Box width="100%">
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Box>
                  <Typography variant="h6" className={classes.createdTime}>
                    {formatMessage({ id: 'crm.details.customer_journey.hours_ago' }, { before: 1 })}
                  </Typography>
                  <Typography variant="h3" className={classes.fontWeightMedium}>
                    {item.name}
                  </Typography>
                  <Box display="flex">
                    <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                      {formatMessage({ id: 'crm.details.customer_journey.room_size' }, { size: item.size })}
                    </Typography>
                    <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                      {formatMessage({ id: 'crm.details.customer_journey.rooms' }, { rooms: item.rooms })}
                    </Typography>
                    {item.properties.map((property, index) => (
                      <Typography key={index} variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                        {formatMessage({ id: `crm.details.customer_journey.properties.${property}` })}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="h3" className={clsx(classes.price, classes.fontWeightMedium)}>
                    € {item.price}
                  </Typography>
                  <Box>
                    <Typography variant="h6" className={clsx(classes.matchStrengthLabel, classes.fontWeightMedium)}>
                      {formatMessage(
                        { id: 'crm.details.customer_journey.match_strenth' },
                        { percentage: Math.floor(item.matchStrength * 100) },
                      )}
                    </Typography>
                    <ProgressFilling progress={item.matchStrength ?? 0} />
                  </Box>
                </Box>
                <Box>
                  <IconButton className="menu-icon" variant="rounded" size="small" onClick={() => {}}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Box mb={2}>
                <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                  {formatMessage({ id: 'crm.details.customer_journey.your_new_home.final_price' })}
                </Typography>
              </Box>
              <Typography variant="h4">€ {item.finalPrice}</Typography>
              <Typography variant="h6" className={classes.gray}>
                {item.finalPriceUpdated?.toLocaleString(DateTime.DATE_MED)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box mb={2}>
                <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                  {formatMessage({ id: 'crm.details.customer_journey.your_new_home.conditions' })}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                className={clsx(item.conditions?.takeOverListOfCases ? '' : classes.conditionUnavailable)}
              >
                {formatMessage({ id: 'crm.details.customer_journey.condition.take_over_list_of_cases' })}
              </Typography>
              <Typography
                variant="h6"
                className={clsx(item.conditions?.technicalBuildingInspection ? '' : classes.conditionUnavailable)}
              >
                {formatMessage({
                  id: 'crm.details.customer_journey.condition.technical_building_inspection',
                })}
              </Typography>
              <Typography
                variant="h6"
                className={clsx(item.conditions?.reservationOfFunding ? '' : classes.conditionUnavailable)}
              >
                {formatMessage({ id: 'crm.details.customer_journey.condition.reservation_of_funding' })}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box mb={2}>
                <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                  {formatMessage({ id: 'crm.details.customer_journey.your_new_home.final_price' })}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                className={clsx(item.requiredDocuments?.salesContract ? '' : classes.documentsUnavailable)}
              >
                {formatMessage({ id: 'crm.details.customer_journey.document.sales_contract' })}
              </Typography>
              <Typography
                variant="h6"
                className={clsx(item.requiredDocuments?.driverLicense ? '' : classes.documentsUnavailable)}
              >
                {formatMessage({ id: 'crm.details.customer_journey.document.driver_license' })}
              </Typography>
              <Typography
                variant="h6"
                className={clsx(item.requiredDocuments?.employmentConfirmation ? '' : classes.documentsUnavailable)}
              >
                {formatMessage({ id: 'crm.details.customer_journey.document.employment_confirmation' })}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Box mb={2}>
                <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                  {formatMessage({ id: 'crm.details.customer_journey.your_new_home.final_price' })}
                </Typography>
              </Box>
              <Typography variant="h4" className={classes.bold}>
                {formatMessage({ id: `crm.details.customer_journey.your_new_home.${item.status}` })}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
