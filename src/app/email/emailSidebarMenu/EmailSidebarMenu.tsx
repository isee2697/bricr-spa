import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { SideMenu } from 'ui/molecules';
import { Box, Collapse, Grid, SidebarHideButton, SideMenuItem, SideSubMenuItem, Slide } from 'ui/atoms';
import { MenuGroup, MenuItem, SidebarMenuType, SubMenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { useLocale } from 'hooks';
import { SaleIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { EmailSidebarMenuProps } from './EmailSidebarMenu.types';
import { useStyles } from './EmailSidebarMenu.styles';
import { EmailSidebarMenuItem } from './EmailSidebarMenuItem';
import { EmailSidebarSubMenuItem } from './EmailSidebarSubMenuItem';

export const EmailSidebarMenu = ({ onHide, isVisible, folders }: EmailSidebarMenuProps) => {
  const { params } = useRouteMatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { pathname, hash } = useLocation();
  const { push } = useHistory();
  const [isGroupOpen, setGroupOpen] = useState<Record<string, boolean>>({});

  const menu: SidebarMenuType = {
    url: AppRoute.email.replace(':inboxId', params.inboxId),
    groups: folders.map(folder => ({
      items: [
        {
          key: folder.folder.name,
          title: folder.folder.displayName || folder.folder.name,
          count: folder.numberOfEmails,
        },
      ],
    })),
  };

  const renderSubItem = (subItem: SubMenuItem, menuItem: MenuItem) => {
    if (typeof subItem === 'string') {
      return (
        <SideSubMenuItem
          key={subItem}
          title={menuItem.title}
          selected={pathname === `${menu.url}/${menuItem.key}/${subItem}`}
          onClick={() => push(`${menu.url}/${menuItem.key}#${subItem}`)}
        />
      );
    }

    return (
      <SideSubMenuItem
        key={subItem.id}
        title={
          <EmailSidebarSubMenuItem
            id={subItem.id}
            selected={`${pathname}${hash}` === `${menu.url}/${menuItem.key}#${subItem.id}`}
            title={subItem.title ? subItem.title : formatMessage({ id: subItem.label })}
          />
        }
        selected={`${pathname}${hash}` === `${menu.url}/${menuItem.key}#${subItem.id}`}
        onClick={() => (subItem.onClick ? subItem.onClick() : push(`${menu.url}/${menuItem.key}#${subItem.id}`))}
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
