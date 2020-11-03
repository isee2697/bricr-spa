import React from 'react';

import { EmailHeader } from '../emailHeader/EmailHeader';
import { Box, Button, Card, CardContent, CardHeader, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon, SettingsIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';

import { EmailInboxProps } from './Inbox.types';

export const EmailInbox = ({ onSidebarOpen, isSidebarVisible }: EmailInboxProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'email.list' })} />
      <EmailHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <IconButton variant="rounded" size="small" onClick={() => {}}>
                <SettingsIcon />
              </IconButton>
            </Box>
            <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />}>
              {formatMessage({ id: 'email.inbox.new_email' })}
            </Button>
          </Box>
        }
      />
      <Page withoutHeader>
        <Card>
          <CardHeader title={formatMessage({ id: 'email.inbox.title' })} />
          <CardContent>
            <InfoSection emoji="🎉">
              <Typography variant="h3">{formatMessage({ id: 'email.inbox.empty_title' })}</Typography>
              <Typography variant="h3">{formatMessage({ id: 'email.inbox.empty_description' })}</Typography>
            </InfoSection>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
