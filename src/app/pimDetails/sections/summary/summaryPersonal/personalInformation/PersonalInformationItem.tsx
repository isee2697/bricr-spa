import React from 'react';
import { Avatar, Box, Emoji, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { PersonalInformationItemProps } from './PersonalInformation.types';
import { useStyles } from './PersonalInformationItem.styles';

export const PersonalInformationItem = ({
  profile: { firstName, lastName, email, emailAddresses = [], phoneNumbers = [], image },
  className,
}: PersonalInformationItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box width="100%" display="flex" className={className}>
      <Box>
        <Avatar variant="square" src={image?.url || ''} className={classes.image}>
          {!image?.url && <Emoji>{'�'}</Emoji>}
        </Avatar>
      </Box>
      <Grid container className={classes.panel}>
        <Box className={classes.header}>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {firstName} {lastName}
          </Typography>
        </Box>
        <Grid container className={classes.details}>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'pim_details.summary.personal.personal_information.address' })}
            </Typography>
            <Typography variant="h5">1011 Amsterdam</Typography>
            <Typography variant="h5">Isenburgstraat 36, Breda</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'pim_details.summary.personal.personal_information.contact' })}
            </Typography>
            {phoneNumbers &&
              phoneNumbers.map((phoneNumber, index) => (
                <Typography variant="h5">T: {phoneNumber.phoneNumber}</Typography>
              ))}
            <Typography variant="h5">E: {email}</Typography>
            {emailAddresses &&
              emailAddresses.map((emailAddress, index) => (
                <Typography variant="h5">E: {emailAddress.emailAddress}</Typography>
              ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'pim_details.summary.personal.personal_information.contact' })}
            </Typography>
            <Typography variant="h5">The owner is out of town</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
