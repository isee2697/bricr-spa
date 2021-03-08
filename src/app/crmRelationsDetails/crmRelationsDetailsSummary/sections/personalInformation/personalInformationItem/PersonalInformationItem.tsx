import React from 'react';
import { useTheme } from '@material-ui/core';
import { DateTime } from 'luxon';

import { Avatar, Box, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { HeadIcon } from 'ui/atoms/icons';

import { useStyles } from './PersonalInformationItem.styles';
import { PersonalInformationItemProps } from './PersonalInformationItem.types';

export const PersonalInformationItem = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  gender,
  dateOfBirth,
  avatar,
  addresses,
}: PersonalInformationItemProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();

  return (
    <Box width="100%" display="flex" className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <Avatar variant="circle" src={avatar?.url || ''} className={classes.image}>
          {!avatar?.url && (
            <HeadIcon
              width={theme.spacing(20)}
              height={theme.spacing(20)}
              viewBox={`0 0 ${theme.spacing(20)} ${theme.spacing(20)}`}
              className={classes.userAvatar}
            />
          )}
        </Avatar>
        <Box mt={1} display="flex" alignItems="center">
          {gender && <Typography variant="h6">{formatMessage({ id: `common.gender.${gender}` })}</Typography>}
          {dateOfBirth && (
            <Typography variant="h6" className={classes.fontWeightBold}>
              {DateTime.fromISO(dateOfBirth).toLocaleString(DateTime.DATE_SHORT)} (
              {DateTime.fromISO(dateOfBirth).diffNow('year')})
            </Typography>
          )}
        </Box>
      </Box>
      <Box flex={'1 1'} padding={2}>
        <Box className={classes.header}>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {firstName} {lastName}
          </Typography>
        </Box>
        <Grid container className={classes.details}>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.summary.personal.personal_information.address' })}
            </Typography>
            {addresses && addresses?.length > 0 && (
              <Box>
                <Typography variant="h5">{addresses[0].street}</Typography>
                <Typography variant="h5">
                  {addresses[0].zipcode}, {addresses[0].city}
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.summary.personal.personal_information.contact' })}
            </Typography>
            {phoneNumber && <Typography variant="h5">T: {phoneNumber}</Typography>}
            <Typography variant="h5">E: {email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.summary.personal.personal_information.contact' })}
            </Typography>
            <Typography variant="h5">The owner is out of town</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
