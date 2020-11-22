import React from 'react';
import clsx from 'classnames';

import { Avatar, Box, Chip, Emoji, Grid, IconButton, Typography, UserAvatar } from 'ui/atoms';
import { EuroIcon, HelpIcon, MenuIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({
  item: {
    image,
    interests = [],
    order: { id: orderId, address, image: orderImage, interests: orderInterests, rooms, roomSize, price },
    accountManagers,
  },
  checkbox,
  checked,
  status,
}: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked }, status)}>
        {checkbox}
        <Box width="100%" display="flex" alignItems="flex-start" className={classes.rowItem}>
          <Box mr={3}>
            <Avatar variant="square" src={image || ''} className={classes.image}>
              {(!image || image === '') && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography variant="h3" className={classes.fontWeightBold}>
                  {address}
                </Typography>
                <Box display="flex" alignItems="flex-start">
                  <Box mr={2}>
                    <Avatar variant="rounded" src={orderImage || ''} className={classes.orderImage}>
                      {(!orderImage || orderImage === '') && <Emoji>{'📷'}</Emoji>}
                    </Avatar>
                  </Box>
                  <Box>
                    <Typography variant="h3" className={classes.fontWeightBold}>
                      {price && price > 0 ? (
                        <>
                          <EuroIcon /> {price}
                        </>
                      ) : (
                        '-'
                      )}
                    </Typography>
                    <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                      {roomSize && roomSize > 0 ? (
                        <>
                          {roomSize} <SquareMeterIcon />
                        </>
                      ) : (
                        '-'
                      )}
                    </Typography>
                    <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                      {rooms && rooms > 0
                        ? formatMessage({ id: 'crm.details.sales.orders.order.rooms' }, { rooms })
                        : '-'}
                    </Typography>
                    {orderInterests.map((interest, index) => (
                      <Typography key={index} variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                        {formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mt={1.25}>
                  <HelpIcon color="error" />
                  <Typography variant="h5" color="error" className={classes.fontWeightMedium}>
                    {formatMessage({ id: 'crm.details.sales.orders.order.contact_son_and_daughter' })}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                  {formatMessage({ id: 'crm.details.sales.orders.order.sales_order' })}
                </Typography>
                <Typography variant="h5" className={classes.fontWeightBold} color="textSecondary">
                  ORD-{orderId}
                </Typography>
                <Box display="flex" flexWrap="wrap" mt={1.5}>
                  {interests.map((interest, index) => (
                    <Box mr={1.5} mt={0.5} key={index}>
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                        size="small"
                      />
                    </Box>
                  ))}
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                    {formatMessage({ id: 'crm.details.sales.acquisition.account_managers' })}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {accountManagers.map(({ name, image }, index) => (
                      <Box mr={0.5} mb={0.5}>
                        <UserAvatar name={name} variant="circle" avatar={image} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <IconButton variant="rounded" size="small">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
