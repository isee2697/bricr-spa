import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'classnames';
import Nylas from 'nylas';
import { useQueryParam, StringParam } from 'use-query-params';
import { useHistory } from 'react-router';

import { Box, Card, CardContent, CardHeader, Grid, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { AddIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, InfoSection } from 'ui/molecules';
import { useAuthorizeNylasAccountWithTokenMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddNewAccountModal } from './addNewAccountModal/AddNewAccountModal';
import { useStyles } from './Settings.styles';
import { CalendarSettingsProps } from './Settings.types';

Nylas.config({
  clientId: process.env.REACT_APP_NYLAS_CLIENT_ID || '',
  clientSecret: process.env.REACT_APP_NYLAS_CLIENT_SECRET || '',
});

export const CalendarSettings = ({
  onSidebarClose,
  onSidebarOpen,
  isSidebarVisible,
  accounts,
}: CalendarSettingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { isOpen } = useModalState('add-new-calendar-account');
  const { open, close } = useModalDispatch();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [authorizeNylasAccountWithToken] = useAuthorizeNylasAccountWithTokenMutation();

  const [nylasAuthCode, setNylasAuthCode] = useQueryParam('code', StringParam);

  const { push } = useHistory();

  useEffect(() => {
    const addNylasAccount = async () => {
      if (nylasAuthCode) {
        await authorizeNylasAccountWithToken({
          variables: {
            nylasToken: nylasAuthCode,
            isCalendarConnected: true,
          },
        });
        window.location.href = window.location.href.split('?')[0];
      }
    };
    addNylasAccount();
  }, [authorizeNylasAccountWithToken, nylasAuthCode, setNylasAuthCode]);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const onClickAccount = (accountId: string) => {
    push(`${AppRoute.calendar}/${accountId}/appointments`);
  };

  const tabs: ActionTab[] = [
    {
      value: 'active',
      amount: 1,
      label: 'common.active',
      hasBadge: true,
    },
    {
      value: 'inactive',
      amount: 0,
      label: 'common.inactive',
      hasBadge: true,
    },
  ];

  const actions = [
    {
      value: 'archive',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  return (
    <>
      <Box flex={1}>
        <Grid container className={classes.content}>
          <Page withoutHeader>
            <Card>
              <CardHeader
                title={formatMessage({ id: 'calendar.account_settings.title' })}
                action={
                  <IconButton
                    size="small"
                    variant="circle"
                    color="primary"
                    onClick={() => open('add-new-calendar-account')}
                  >
                    <AddIcon />
                  </IconButton>
                }
              />
              <CardContent>
                {accounts.length === 0 && (
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'calendar.account_settings.empty_title',
                      })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'calendar.account_settings.empty_description',
                      })}
                    </Typography>
                  </InfoSection>
                )}
                {accounts.length > 0 && (
                  <>
                    <ActionTabs onStatusChange={setStatus} status={status} tabs={tabs} badgeClasses={classes.badge} />
                    <Table>
                      <TableBody>
                        {accounts.map(({ syncState, email, provider, id }, index) => (
                          <TableRow
                            key={index}
                            className={classes.tableRow}
                            onClick={() => {
                              onClickAccount(id);
                            }}
                          >
                            <TableCell>{syncState}</TableCell>
                            <TableCell>{email}</TableCell>
                            <TableCell>{provider}</TableCell>
                            <TableCell>
                              <IconButton variant="rounded" size="small" onClick={onMenuClick}>
                                <MenuIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </CardContent>
            </Card>
          </Page>
        </Grid>
      </Box>
      <AddNewAccountModal
        isOpened={isOpen}
        onClose={() => close('add-new-calendar-account')}
        onSubmit={async (values): Promise<boolean> => {
          const options = {
            loginHint: values.email,
            redirectURI: window.location.href,
            scopes: ['email.modify', 'email.send', 'calendar', 'contacts'],
          };

          // Redirect your user to the auth_url
          const authUrl = Nylas.urlForAuthentication(options);

          window.open(authUrl, '_blank');

          return true;
        }}
      />
      <Menu
        id="calendar-account-settings-row-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `calendar.action.${action.value}`,
                })}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
