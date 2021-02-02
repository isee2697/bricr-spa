import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Avatar, Box, Card, CardContent, CardHeader, PersonChip, Typography } from 'ui/atoms';
import { HelpIcon, MailIcon } from 'ui/atoms/icons';

import { BiddingItems } from './BiddingItems';
import { Counter } from './BiddingItems.types';
import { useStyles } from './Biddings.styles';

export const Biddings = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const counters: Counter[] = [
    {
      id: '00-0000',
      offer: 358000,
      offerDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      counterOffer: 320000,
      counterOfferDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      conditions: {
        takeOverListOfCases: true,
        technicalBuildingInspection: true,
        reservationOfFunding: true,
      },
      status: 'counter',
      statusUpdateDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
    },
    {
      id: '00-0001',
      offer: 320000,
      offerDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      counterOffer: 350000,
      counterOfferDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      conditions: {
        takeOverListOfCases: true,
        technicalBuildingInspection: true,
        reservationOfFunding: false,
      },
      status: 'counter',
      statusUpdateDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
    },
    {
      id: '00-0002',
      offer: 350000,
      offerDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      counterOffer: 345000,
      counterOfferDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
      conditions: {
        takeOverListOfCases: true,
        technicalBuildingInspection: true,
        reservationOfFunding: false,
      },
      status: 'pending',
      statusUpdateDate: DateTime.fromISO('2020-05-17T15:26:40.317Z'),
    },
  ];

  const biddingInfo = {
    name: 'Janneke Gerards',
    phone: '030-8890876',
    email: 'jannekegerards@live.com',
    image: 'http://placeimg.com/104/152/arch',
    partner: {
      name: 'Anna Kowalska',
      iamge: 'http://placeimg.com/104/152/arch',
    },
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.biddings' })} />
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar variant="circle" src={biddingInfo.image} className={classes.avatar} />
          <Box ml={2}>
            <Typography variant="h3" className={classes.fontWeightBold}>
              {biddingInfo.name}
            </Typography>
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" className={classes.biddingContact}>
                <HelpIcon color="inherit" />
                <Typography variant="h5" color="textSecondary">
                  {biddingInfo.phone}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" ml={5} className={classes.biddingContact}>
                <MailIcon color="inherit" />
                <Typography variant="h5" color="textSecondary">
                  {biddingInfo.phone}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box ml={6}>
            <Typography variant="h6">{formatMessage({ id: 'pim_details.biddings.partner' })}</Typography>
            <PersonChip image={biddingInfo.partner.iamge} name={biddingInfo.partner.name} />
          </Box>
        </Box>
        <BiddingItems counters={counters} />
      </CardContent>
    </Card>
  );
};
