import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'classnames';

import { EmailSidebarMenuContainer } from '../emailSidebarMenu/EmailSidebarMenuContainer';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { EmailHeader } from '../emailHeader/EmailHeader';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddIcon, ClockIcon, DeleteIcon, MenuIcon, SettingsIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddNewInboxModal } from '../addNewInboxModal/AddNewInboxModal';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, InfoSection } from 'ui/molecules';

import { useStyles } from './Settings.styles';
import { EmailSettingsProps, Inbox } from './Settings.types';

export const EmailSettings = ({ onSidebarClose, onSidebarOpen, isSidebarVisible }: EmailSettingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const { push } = useHistory();
  const { isOpen } = useModalState('add-new-inbox');
  const [inboxes, setInboxes] = useState<Inbox[]>([]);
  const { open, close } = useModalDispatch();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [status, setStatus] = useState<'active' | 'inactive'>('active');

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
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
      <EmailSidebarMenuContainer onHide={onSidebarClose} isVisible={isSidebarVisible} />
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
              <CardHeader
                title={formatMessage({ id: 'email.inbox_settings.title' })}
                action={
                  <IconButton size="small" variant="circle" color="primary" onClick={() => open('add-new-inbox')}>
                    <AddIcon />
                  </IconButton>
                }
              />
              <CardContent>
                {inboxes.length === 0 && (
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'email.inbox_settings.empty_title',
                      })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({
                        id: 'email.inbox_settings.empty_description',
                      })}
                    </Typography>
                  </InfoSection>
                )}
                {inboxes.length > 0 && (
                  <>
                    <ActionTabs onStatusChange={setStatus} status={status} tabs={tabs} badgeClasses={classes.badge} />
                    <Table>
                      <TableBody>
                        {inboxes.map(({ name, mainEmailAddress, dateCreated }, index) => (
                          <TableRow key={index} className={classes.tableRow}>
                            <TableCell>{name}</TableCell>
                            <TableCell>{mainEmailAddress}</TableCell>
                            <TableCell>
                              <Typography variant="h6">{dateCreated.toLocaleString(DateTime.DATE_SHORT)}</Typography>
                              <Typography variant="caption">
                                {dateCreated.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                              </Typography>
                            </TableCell>
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
      <AddNewInboxModal
        isOpened={isOpen}
        onClose={() => close('add-new-inbox')}
        onSubmit={() => {
          setInboxes([
            { id: '0001', name: 'Inbox', mainEmailAddress: 'info@hureninhetgroen.nl', dateCreated: DateTime.local() },
          ]);
          close('add-new-inbox');
        }}
      />
      <Menu
        id="email-inbox-settings-row-menu"
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
                  id: `email.action.${action.value}`,
                })}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
