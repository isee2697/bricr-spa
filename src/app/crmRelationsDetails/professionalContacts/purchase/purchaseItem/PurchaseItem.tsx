import React from 'react';

import { Avatar, Box, Emoji, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { DisconnectIcon } from 'ui/atoms/icons';

import { useStyles } from './PurchaseItem.styles';
import { PurchaseItemProps } from './PurchaseItem.types';

export const PurchaseItem = ({ partner: { firstName, lastName, email, avatar } }: PurchaseItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" className={classes.root}>
      <Box>
        <Avatar variant="square" src={avatar?.url || ''} className={classes.image}>
          {!avatar?.url && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width="100%" className={classes.paddingTwo}>
        <Box display="flex" justifyContent="space-between" className={classes.header}>
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {firstName} {lastName}
          </Typography>
          <ListOptionsMenu hideDeleteButton onEditClick={() => {}}>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'crm.details.professional_contacts_purchase.disconnect',
              })}
              icon={<DisconnectIcon />}
            />
          </ListOptionsMenu>
        </Box>
        <Box display="flex" className={classes.details}>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.professional_contacts_purchase.office' })}
            </Typography>
            <Typography variant="h5">Vestiging Weert</Typography>
            <Typography variant="h5">Hendriks Makelaardij</Typography>
          </Box>
          <Box width="50%">
            <Typography variant="h6" className={classes.fontWeightBold}>
              {formatMessage({ id: 'crm.details.professional_contacts_purchase.contact' })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
