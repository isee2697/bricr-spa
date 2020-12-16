import React from 'react';
import { DateTime } from 'luxon';

import { Grid, Box, Typography } from 'ui/atoms';
import { HistoryIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { useStyles } from './DocumentUploadedFlow.styles';
import { UploadedGeneralForm } from './forms/UploadedGeneralForm';
import { UploadedDetailsForm } from './forms/UploadedDetailsForm';
import { UploadedRightsForm } from './forms/UploadedRightsForm';
import { UploadedSecureForm } from './forms/UploadedSecureForm';
import { UploadedActionsForm } from './forms/UploadedActionsForm';
import { DocumentUploadedFlowProps } from './DocumentUploadedFlow.types';

export const DocumentUploadedFlow = ({ title }: DocumentUploadedFlowProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const modifiedAt = new Date();
  const owner = 'Christian van Gils';

  return (
    <Page withoutHeader>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">{title}</Typography>
        </Box>
      </Grid>
      <Box mt={3} width="100%">
        <Grid item xs={12}>
          <Box mt={2.5}>
            <UploadedGeneralForm />
          </Box>
          <Box mt={2.5}>
            <UploadedDetailsForm />
          </Box>
          <Box mt={2.5}>
            <UploadedRightsForm />
          </Box>
          <Box mt={2.5}>
            <UploadedSecureForm />
          </Box>
          <Box mt={2.5}>
            <UploadedActionsForm />
          </Box>
          <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" className={classes.grayText}>
              {modifiedAt && (
                <>
                  {formatMessage({ id: 'common.last_updated' })}:{' '}
                  <Typography component="span" variant="h5" className={classes.boldText}>
                    {DateTime.fromJSDate(modifiedAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
                  </Typography>
                </>
              )}
            </Typography>
            <Typography variant="h5" className={classes.grayText}>
              <HistoryIcon />
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Page>
  );
};
