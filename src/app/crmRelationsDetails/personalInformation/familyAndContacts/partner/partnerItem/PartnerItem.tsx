import React from 'react';
import { Avatar, Box, Emoji, IconButton, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './PartnerItem.styles';
import { PartnerItemProps } from './PartnerItem.types';

export const PartnerItem = ({
  className,
  partner: { firstName, lastName, email, emailAddresses = [], phoneNumbers = [], image },
}: PartnerItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" className={className}>
      <Box>
        <Avatar variant="square" src={image?.url || ''} className={classes.image}>
          {!image?.url && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width="100%" className={classes.paddingTwo}>
        <Box display="flex" justifyContent="space-between" className={classes.header}>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {firstName} {lastName}
          </Typography>
          <Box>
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" className={classes.details}>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.office' })}
            </Typography>
            <Typography variant="h5">Vestiging Weert</Typography>
            <Typography variant="h5">Hendriks Makelaardij</Typography>
          </Box>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.contact' })}
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
