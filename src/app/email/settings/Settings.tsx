import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { EmailSidebarMenu } from '../emailSidebarMenu/EmailSidebarMenu';
import { Box, Button, Card, CardContent, Grid, IconButton } from 'ui/atoms';
import { EmailHeader } from '../emailHeader/EmailHeader';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddIcon, SettingsIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';

import { useStyles } from './Settings.styles';
import { EmailSettingsProps } from './Settings.types';

export const EmailSettings = ({ onSidebarClose, onSidebarOpen, isSidebarVisible }: EmailSettingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const { push } = useHistory();

  return (
    <>
      <EmailSidebarMenu onHide={onSidebarClose} isVisible={isSidebarVisible} />
      <Box flex={1}>
        <Grid container className={classes.content}>
          <EmailHeader
            onSidebarOpen={onSidebarOpen}
            isSidebarVisible={isSidebarVisible}
            actions={
              <Box display="flex" alignItems="center">
                <Box mr={2}>
                  <IconButton
                    variant="rounded"
                    size="small"
                    onClick={() => push(`${joinUrlParams(AppRoute.email, urlParams)}/settings`)}
                  >
                    <SettingsIcon />
                  </IconButton>
                </Box>
                <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />} onClick={() => {}}>
                  {formatMessage({ id: 'email.inbox.new_email' })}
                </Button>
              </Box>
            }
          />
          <Page withoutHeader>
            <Card>
              <CardContent></CardContent>
            </Card>
          </Page>
        </Grid>
      </Box>
    </>
  );
};
