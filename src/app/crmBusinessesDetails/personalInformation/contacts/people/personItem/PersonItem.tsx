import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Emoji, IconButton, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

import { useStyles } from './PersonItem.styles';
import { PersonItemProps } from './PersonItem.types';

export const PersonItem = ({ person: { firstName, lastName } }: PersonItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex">
      <Box>
        <Avatar variant="square" src={''} className={classes.image}>
          <Emoji>{'📷'}</Emoji>
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
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.people.office' })}
            </Typography>
            <Typography variant="h5">Vestiging Weert</Typography>
            <Typography variant="h5">Hendriks Makelaardij</Typography>
          </Box>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.people.contact' })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
