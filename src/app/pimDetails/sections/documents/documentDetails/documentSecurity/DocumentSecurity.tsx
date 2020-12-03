import React from 'react';
import { DateTime } from 'luxon';

import { Box, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HistoryIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { useStyles } from './DocumentSecurity.styles';
import { SecurityGeneralForm } from './forms/SecurityGeneralForm';
import { DocumentSecurityProps } from './DocumentSecurity.types';
import { SecurityDetailsForm } from './forms/SecurityDetailsForm';
import { SecurityRightsForm } from './forms/SecurityRightsForm';
import { SecuritySecureForm } from './forms/SecuritySecureForm';
import { SecurityActionsForm } from './forms/SecurityActionsForm';

export const DocumentSecurity = ({ title }: DocumentSecurityProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const createdAt = new Date(2020, 12, 25, 16, 53);
  const owner = 'Christian van Gils';

  return (
    <Page withoutHeader>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">{title}</Typography>
        </Box>
      </Grid>
      <Box mt={3} width="100%">
        <Box display="flex" flexDirection="column" width="100%">
          <SecurityGeneralForm />
          <Box mt={3.5} />
          <SecurityDetailsForm />
          <Box mt={3.5} />
          <SecurityRightsForm />
          <Box mt={3.5} />
          <SecuritySecureForm />
          <Box mt={3.5} />
          <SecurityActionsForm />
          <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" className={classes.grayText}>
              {formatMessage({ id: 'common.last_updated' })}:{' '}
              <Typography component="span" variant="h5" className={classes.boldText}>
                {DateTime.fromJSDate(createdAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
              </Typography>
            </Typography>
            <Typography variant="h5" className={classes.grayText}>
              <HistoryIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
