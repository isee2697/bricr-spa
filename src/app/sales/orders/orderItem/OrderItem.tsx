import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { Avatar, Box, Chip, Emoji, Grid, IconButton, PersonChip, Typography, UserAvatar } from 'ui/atoms';
import { HelpIcon, MailIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { OrderItemProps } from './OrderItem.types';
import { useStyles } from './OrderItem.styles';

export const OrderItem = (props: OrderItemProps) => {
  const {
    checkbox,
    checked,
    order: { id, name, type },
  } = props;
  const classes = useStyles(props);
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box display="flex" width="100%" alignItems="flex-start">
        <Box
          className={classes.rowContent}
          width="100%"
          mt={2}
          onClick={() => {
            push(joinUrlParams(AppRoute.salesDetails, { type: 'orders', id }));
          }}
        >
          <Box width="100%" display="flex" alignItems="flex-start">
            <Box mr={2} width="100%">
              <Grid container>
                <Grid item xs={7}>
                  <Box display="flex">
                    <Avatar variant="rounded" src={''} className={classes.image}>
                      {<Emoji>{'📷'}</Emoji>}
                    </Avatar>
                    <Box>
                      <Typography variant="h3" className={classes.fontWeightBold}>
                        {name}
                      </Typography>
                      <Box display="flex" alignItems="center" mr={4}>
                        <HelpIcon />
                        <Box mr={0.5} />
                        <Typography variant="h5" className={classes.fontWeightMedium}>
                          'NUMBER HERE'
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <MailIcon />
                        <Box mr={0.5} />
                        <Typography variant="h5" className={classes.fontWeightMedium}>
                          'EMAIL HERE'
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={2} display="flex">
                    <Box mr={2}>
                      <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                        {formatMessage({ id: 'sales.orders.sales_order' })}
                      </Typography>
                      <Box mt={1}>
                        <Avatar variant="rounded" src={'order image'} className={classes.orderImage}>
                          {<Emoji>{'📷'}</Emoji>}
                        </Avatar>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="h6" color="textSecondary">
                        ORDER ID
                        {/*{`ORD-${order.id}`}*/}
                      </Typography>
                      <Box display="flex" flexWrap="wrap">
                        ORDER INTERESTS
                        {/*{order.interests.map((interest, index) => (*/}
                        {/*  <Box mr={1.5} mt={0.5} key={index}>*/}
                        {/*    <Chip*/}
                        {/*      variant="outlined"*/}
                        {/*      color="primary"*/}
                        {/*      label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}*/}
                        {/*      size="small"*/}
                        {/*    />*/}
                        {/*  </Box>*/}
                        {/*))}*/}
                      </Box>
                      <Box mt={0.5}>
                        <Typography variant="h5" className={classes.fontWeightBold}>
                          ORDER ADDRESS
                          {/*{order.address}*/}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box>
                    <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                      {formatMessage({ id: 'sales.acquisition.partner' })}
                    </Typography>
                    <Typography variant="h6">Partner name</Typography>
                    {/*{!partner && <Typography variant="h6">-</Typography>}*/}
                    {/*{partner && <PersonChip name={partner.name} image={partner.image || ''} />}*/}
                  </Box>
                  <Box mt={5.5}>
                    <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                      {formatMessage({ id: 'sales.orders.account_managers' })}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      Account managers
                      {/*{accountManagers.map((accountManager, index) => (*/}
                      {/*  <Box mr={0.5} mb={0.5}>*/}
                      {/*    <UserAvatar name={accountManager.name} variant="circle" avatar={accountManager.image} />*/}
                      {/*  </Box>*/}
                      {/*))}*/}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <IconButton size="small" variant="rounded">
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
