import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { SideMenu } from 'ui/molecules';
import { Box, Collapse, Grid, SidebarHideButton, SideMenuItem, Slide, Typography } from 'ui/atoms';
import { EmailFolderIcon, MailIcon, TasksIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { EmailSidebarMenuGroup, EmailSidebarMenuProps, EmailSidebarMenuType } from './EmailSidebarMenu.types';
import { useStyles } from './EmailSidebarMenu.styles';
import { EmailSidebarMenuItem } from './EmailSidebarMenuItem';

export const EmailSidebarMenu = ({ onHide, isVisible, folders = [], accounts }: EmailSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [isGroupOpen, setGroupOpen] = useState<Record<string, boolean>>({});

  const menu: EmailSidebarMenuType = {
    url: AppRoute.email,
    groups: accounts.map(account => ({
      id: account.id,
      email: account.email,
      items: folders.map(folder => ({
        id: folder.folder?.nylasFolderId as string,
        icon: !folder.folder?.name ? (
          <EmailFolderIcon />
        ) : folder.folder.name === 'inbox' ? (
          <MailIcon />
        ) : (
          <TasksIcon />
        ),
        title: folder.folder?.displayName || '',
        count: folder.numberOfUnreadEmails || 0,
      })),
    })),
  };

  const isGroupCollapseOpen = (group: EmailSidebarMenuGroup) => {
    if (isGroupOpen[group.id] === undefined) {
      const isActive = !!pathname.includes(`${menu.url}/inbox/${group.id}`);

      setGroupOpen(groups => ({
        ...groups,
        [group.id as string]: isActive,
      }));

      return isActive;
    }

    return isGroupOpen[group.id];
  };

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid item xs={12} md={3} lg={2}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <SideMenu className={classes.root} disablePadding>
              {menu.groups.map((group, index) => (
                <Box className={classes.group} key={`group_${index}`}>
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.groupHeader}
                    onClick={() => push(`${AppRoute.email}/inbox/${group.id}`)}
                  >
                    {isGroupCollapseOpen(group) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    <Box ml={2}>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'email.sidebar.inbox' }, { index })}
                      </Typography>
                      <Typography variant="h6">{group.email}</Typography>
                    </Box>
                  </Box>
                  <Collapse in={isGroupCollapseOpen(group)} timeout="auto" unmountOnExit>
                    {group.items.map(item => (
                      <SideMenuItem
                        key={item.id}
                        icon={item.icon}
                        title={<EmailSidebarMenuItem value={item.title} count={item.count} />}
                        selected={pathname.startsWith(`${menu.url}/inbox/${group.id}/${item.id}`)}
                        badge={item.count}
                        onClick={() => push(`${menu.url}/inbox/${group.id}/${item.id}`)}
                      />
                    ))}
                  </Collapse>
                </Box>
              ))}
            </SideMenu>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
