import React from 'react';
import clsx from 'classnames';

import { OrdersSaleData } from '../List.types';
import { useStyles } from '../List.styles';
import { useLocale } from 'hooks';
import { Avatar, Box, Chip, Emoji, IconButton, ProgressFilling, Typography } from 'ui/atoms';
import { ArrowDownIcon, HelpIcon, MenuIcon } from 'ui/atoms/icons';

export const SaleItem = ({
  image,
  name,
  matchStrength,
  priceBeneficial,
  priceOriginal,
  properties,
  price,
  rooms,
  size,
  date,
}: OrdersSaleData) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box pt={2} pb={2.5}>
      <Box display="flex" className={clsx(classes.orderItem, 'active')}>
        <Box mr={2}>
          <Avatar variant="rounded" src={image} className={classes.image}>
            {!image && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          <Box mt={1}>
            <Typography variant="h6" className={classes.matchStrengthLabel}>
              {formatMessage({ id: 'crm.details.orders.match_strenth' })}
            </Typography>
            <ProgressFilling progress={matchStrength ?? 0} />
          </Box>
        </Box>
        <Box width="100%">
          <Box display="flex">
            <Box flex={1}>
              <Typography variant="h6" className={classes.gray}>
                {formatMessage({ id: 'crm.details.orders.days_remaining' }, { days: 2 })}
              </Typography>
              <Typography variant="h3" className={classes.fontWeightBold}>
                {name}
              </Typography>
              <Box display="flex" flexWrap="wrap" alignItems="flex-end">
                <Box mr={2}>
                  <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                    {size} m<sup>2</sup>
                  </Typography>
                </Box>
                <Box mr={2}>
                  <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                    {formatMessage({ id: 'dictionaries.rooms.count' }, { rooms: rooms })}
                  </Typography>
                </Box>
                {properties.map((property, index) => (
                  <Box mr={2}>
                    <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                      {formatMessage({ id: `dictionaries.property_connection.${property}` })}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={1.5}>
            <Box>
              <Typography variant="h6" className={classes.originalPrice}>
                € {priceOriginal}
              </Typography>
              <Box display="flex" mt={0.5}>
                <Box mr={2}>
                  <Typography variant="h3" className={classes.fontWeightBold}>
                    € {price}
                  </Typography>
                </Box>
                <Typography variant="h3" className={classes.fontWeightMedium}>
                  € {priceBeneficial} p/m
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography align="right" variant="h5" className={clsx(classes.fontWeightBold, classes.red)}>
                {formatMessage({ id: 'crm.details.orders.sign_contract' })}
              </Typography>
              <Box display="flex" mt={0.5}>
                <Box mr={1}>
                  <Chip
                    variant="outlined"
                    label={formatMessage({ id: 'crm.details.orders.sale' })}
                    className={classes.chip}
                  />
                </Box>
                <Box mr={1}>
                  <Chip
                    variant="outlined"
                    label={formatMessage({ id: 'crm.details.orders.rent' })}
                    className={classes.chip}
                  />
                </Box>
                <Box>
                  <Chip
                    variant="outlined"
                    label={formatMessage({ id: 'crm.details.orders.acquisition' })}
                    className={classes.chip}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2.5}>
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <HelpIcon color="error" />
              </Box>
              <Typography variant="h5" className={clsx(classes.red, classes.fontWeightMedium)}>
                {formatMessage({ id: 'crm.details.orders.no_more_house_view_scheduling' })}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" className={classes.gray}>
                {formatMessage({ id: 'common.show_more' })}
              </Typography>
              <ArrowDownIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
