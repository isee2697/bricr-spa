import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, Box, Typography, UserAvatar, IconButton } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

export const AccountManager = () => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {formatMessage({ id: 'sales.invoice.account_manager.title' })}
        </Typography>
        <Box mt={1} display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <UserAvatar name="Mariusz Nowak" />
            <Typography variant="h5">{'Mariusz Nowak'}</Typography>
          </Box>
          <IconButton size="small" variant="rounded">
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
