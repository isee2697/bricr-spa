import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { Box, SideMenuItem, SideSubMenuItem, SidebarHideButton, Collapse, Typography } from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, SaleIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { MenuGroup, MenuItem, SidebarMenuProps, SubMenuItem } from './SidebarMenu.types';

export const SidebarMenu = ({ onHide, menuTitle, menu, translationPrefix }: SidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();
  const [isGroupOpen, setGroupOpen] = React.useState<Record<string, boolean>>({});

  const renderSubItem = (subItem: SubMenuItem, menuItem: MenuItem) => {
    if (typeof subItem === 'string') {
      return (
        <SideSubMenuItem
          key={subItem}
          title={formatMessage({ id: `${translationPrefix}.${subItem}` })}
          selected={pathname === `${menu.url}/${menuItem.key}/${subItem}`}
          onClick={() => push(`${menu.url}/${menuItem.key}/${subItem}`)}
        />
      );
    }

    return (
      <SideSubMenuItem
        key={subItem.id}
        title={subItem.title ? subItem.title : formatMessage({ id: subItem.label })}
        selected={pathname === `${menu.url}/${menuItem.key}/${subItem.id}`}
        onClick={() => push(`${menu.url}/${menuItem.key}/${subItem.id}`)}
        badge={subItem.number}
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
      setGroupOpen(groups => ({
        ...groups,
        [menuGroup.key as string]: true,
      }));

      return true;
    }

    return isGroupOpen[menuGroup.key];
  };

  return (
    <div className={classes.root}>
      <div className={classes.hideButton} onClick={onHide}>
        <SidebarHideButton />
      </div>
      <div className={classes.menuWrapper}>
        {!!menuTitle && <Box mb={2}>{menuTitle}</Box>}
        <SideMenu className={classes.root} disablePadding>
          {menu.groups.map((group, index) => (
            <Box className={classes.group} key={`group_${index}`}>
              {group.isCollapsable && group.key && (
                <Box
                  onClick={() =>
                    setGroupOpen(groups => ({
                      ...groups,
                      [group.key as string]: !groups[group.key as string],
                    }))
                  }
                  className={classes.collapseHeader}
                >
                  <Typography className={classes.collapseTitle}>{formatMessage({ id: group.key })}</Typography>
                  {isGroupCollapseOpen(group) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Box>
              )}
              <Collapse in={isGroupCollapseOpen(group)} timeout="auto" unmountOnExit>
                {group.items.map(item => (
                  <SideMenuItem
                    key={item.key}
                    icon={item.icon ? item.icon : <SaleIcon />}
                    title={formatMessage({ id: `${translationPrefix}.${item.key}` })}
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
        {!!menu.back && (
          <SideMenuItem
            className={classes.backToList}
            title={<Link to={menu.back.url}>{menu.back.title}</Link>}
            selected={false}
          />
        )}
      </div>
    </div>
  );
};
