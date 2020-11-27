import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { EmailHeader } from '../emailHeader/EmailHeader';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon, ManageIcon, SearchIcon, SettingsIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';
import { EmailTable } from '../emailTable/EmailTable';
import { AppRoute } from 'routing/AppRoute.enum';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { EmailSidebarMenuContainer } from '../emailSidebarMenu/EmailSidebarMenuContainer';

import { EmailInboxProps } from './Inbox.types';
import { useStyles } from './Inbox.styles';

export const EmailInbox = ({ onSidebarOpen, onSidebarClose, isSidebarVisible, emails }: EmailInboxProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [checkedEmails, setCheckedEmails] = useState<string[]>([]);
  const urlParams = useParams();
  const { push } = useHistory();

  const handleCheckEmail = (emailId: string) => {
    const index = checkedEmails.findIndex(id => id === emailId);

    if (index >= 0) {
      setCheckedEmails(checkedEmails.filter(id => id !== emailId));
    } else {
      setCheckedEmails([...checkedEmails, emailId]);
    }
  };

  const handleCheckAllEmails = () => {
    setCheckedEmails(
      emails.length !== checkedEmails.length ? emails.map(email => `email-list-checkbox-${email.id}`) : [],
    );
  };

  const sortOptions = ['last_edited'];

  return (
    <>
      <EmailSidebarMenuContainer onHide={onSidebarClose} isVisible={isSidebarVisible} />
      <Grid item xs={12} md={9} lg={10}>
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
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddIcon color="inherit" />}
                  onClick={() => {
                    push(`${joinUrlParams(AppRoute.email, urlParams)}/new`);
                  }}
                >
                  {formatMessage({ id: 'email.inbox.new_email' })}
                </Button>
              </Box>
            }
          />
          <Page withoutHeader>
            {emails.length > 0 && (
              <Card>
                <CardHeader
                  title={formatMessage({ id: 'email.inbox.title' })}
                  action={
                    <Box display="flex" alignItems="center">
                      <IconButton size="small" variant="roundedContained">
                        <SearchIcon />
                      </IconButton>
                      <Box mr={1.5} />
                      <IconButton size="small" variant="roundedContained">
                        <ManageIcon />
                      </IconButton>
                    </Box>
                  }
                />
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box ml={0.5} display="flex" alignItems="center">
                      <Checkbox
                        color="primary"
                        checked={emails.length === checkedEmails.length}
                        onClick={handleCheckAllEmails}
                      />
                      <Typography variant="h5" color="textSecondary">
                        {formatMessage({ id: 'common.select_all' })}
                      </Typography>
                    </Box>
                    <Select variant="outlined" value={sortOptions[0]} className={classes.sort}>
                      {sortOptions.map(option => (
                        <MenuItem key={option} value={option}>
                          {formatMessage({ id: `common.sort_options.${option}` })}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <EmailTable
                    emails={emails}
                    checkedItems={checkedEmails}
                    onCheckItem={handleCheckEmail}
                    onCheckAllItems={() => handleCheckAllEmails()}
                  />
                </CardContent>
              </Card>
            )}
            {emails.length === 0 && (
              <Card>
                <CardHeader title={formatMessage({ id: 'email.inbox.title' })} />
                <CardContent>
                  <InfoSection emoji="🎉">
                    <Typography variant="h3">{formatMessage({ id: 'email.inbox.empty_title' })}</Typography>
                    <Typography variant="h3">{formatMessage({ id: 'email.inbox.empty_description' })}</Typography>
                  </InfoSection>
                </CardContent>
              </Card>
            )}
          </Page>
        </Grid>
      </Grid>
    </>
  );
};
