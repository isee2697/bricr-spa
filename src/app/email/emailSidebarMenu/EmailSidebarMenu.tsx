import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { SideMenu } from 'ui/molecules';
import { Box, Collapse, Grid, SidebarHideButton, SideMenuItem, SideSubMenuItem, Slide } from 'ui/atoms';
import { MenuGroup, MenuItem, SidebarMenuType, SubMenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { useLocale } from 'hooks';
import { SaleIcon } from 'ui/atoms/icons';

import { EmailSidebarMenuProps } from './EmailSidebarMenu.types';
import { useStyles } from './EmailSidebarMenu.styles';
import { EmailSidebarMenuItem } from './EmailSidebarMenuItem';
import { EmailSidebarSubMenuItem } from './EmailSidebarSubMenuItem';

export const EmailSidebarMenu = ({ onHide, isVisible }: EmailSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [isGroupOpen, setGroupOpen] = useState<Record<string, boolean>>({});

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          {
            key: 'inbox',
            count: 280,
            subItems: [
              {
                id: 'folder_1',
                label: 'email.menu.inbox.folder_1',
                number: 1,
              },
              {
                id: 'folder_2',
                label: 'email.menu.inbox.folder_2',
              },
              {
                id: 'folder_3',
                label: 'email.menu.inbox.folder_3',
                number: 2,
              },
              {
                id: 'new_folder',
                title: `+ ${formatMessage({ id: 'email.menu.inbox.new_folder' })}`,
                onClick: () => {},
              },
            ],
          },
          {
            key: 'pinned',
            count: 30,
          },
          {
            key: 'sent',
            count: 0,
          },
          {
            key: 'concepts',
            count: 2,
          },
          {
            key: 'spam',
            count: 3,
          },
          {
            key: 'bin',
            count: 0,
          },
          {
            key: 'archive',
            count: 0,
          },
        ],
      },
    ],
  };

  const renderSubItem = (subItem: SubMenuItem, menuItem: MenuItem) => {
    if (typeof subItem === 'string') {
      return (
        <SideSubMenuItem
          key={subItem}
          title={formatMessage({ id: `"email.menu".${subItem}` })}
          selected={pathname === `${menu.url}/${menuItem.key}/${subItem}`}
          onClick={() => push(`${menu.url}/${menuItem.key}/${subItem}`)}
        />
      );
    }

    return (
      <SideSubMenuItem
        key={subItem.id}
        title={
          <EmailSidebarSubMenuItem
            id={subItem.id}
            selected={pathname === `${menu.url}/${menuItem.key}/${subItem.id}`}
            title={subItem.title ? subItem.title : formatMessage({ id: subItem.label })}
          />
        }
        selected={pathname === `${menu.url}/${menuItem.key}/${subItem.id}`}
        onClick={() => (subItem.onClick ? subItem.onClick() : push(`${menu.url}/${menuItem.key}/${subItem.id}`))}
        badge={subItem.number}
        icon={subItem.icon}
      />
    );
  };

  const isGroupCollapseOpen = (menuGroup: MenuGroup) => {
    if (!menuGroup.isCollapsable) {
      return true;
    }

    if (!menuGroup.key) {
      return true;
    }

    if (isGroupOpen[menuGroup.key] === undefined) {
      const isActive = !!menuGroup.items.find(item => pathname.includes(`${menu.url}/${item.key}`));

      setGroupOpen(groups => ({
        ...groups,
        [menuGroup.key as string]: isActive,
      }));

      return isActive;
    }

    return isGroupOpen[menuGroup.key];
  };

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid item xs={12} md={3} lg={2}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <Box mb={6} />
            <SideMenu className={classes.root} disablePadding>
              {menu.groups.map((group, index) => (
                <Box className={classes.group} key={`group_${index}`}>
                  <Collapse in={isGroupCollapseOpen(group)} timeout="auto" unmountOnExit>
                    {group.items.map(item => (
                      <SideMenuItem
                        key={item.key}
                        icon={<SaleIcon />}
                        title={<EmailSidebarMenuItem value={item.key} count={item.count} />}
                        selected={pathname.startsWith(`${menu.url}/${item.key}`)}
                        badge={item.count}
                        onClick={() => push(`${menu.url}/${item.key}`)}
                      >
                        {item.subItems?.map((subItem: SubMenuItem) => renderSubItem(subItem, item))}
                      </SideMenuItem>
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
