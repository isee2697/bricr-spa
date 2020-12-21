import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, Box, Typography, IconButton, PersonChip } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

export const General = () => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h6">{formatMessage({ id: 'sales.invoice.general.invoice_for' })}</Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <PersonChip name={'CGM van Gils'} image={'http://placeimg.com/24/24/people'} />
            <IconButton size="small" variant="rounded">
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h4">Weerschijnvlinder 8</Typography>
            <Typography variant="h4">4814 VA Breda</Typography>
          </Box>
          <IconButton size="small" variant="rounded">
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
