import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'classnames';

import { Box, Card, CardContent, CardHeader, Grid, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { AddIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, InfoSection } from 'ui/molecules';

import { AddNewAccountModal } from './addNewAccountModal/AddNewAccountModal';
import { useStyles } from './Settings.styles';
import { CalendarSettingsProps, CalendarAccount } from './Settings.types';

export const CalendarSettings = ({ onSidebarClose, onSidebarOpen, isSidebarVisible }: CalendarSettingsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { isOpen } = useModalState('add-new-inbox');
  const [inboxes, setInboxes] = useState<CalendarAccount[]>([]);
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
      <Box flex={1}>
        <Grid container className={classes.content}>
          <Page withoutHeader>
            <Card>
              <CardHeader
                title={formatMessage({ id: 'calendar.account_settings.title' })}
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
      <AddNewAccountModal
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
