import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import {
  Box,
  SideMenuItem,
  SideSubMenuItem,
  SidebarHideButton,
  Collapse,
  Typography,
  Slide,
  Grid,
  Scrollable,
} from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, BackIcon, SaleIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { MenuGroup, MenuItem, SidebarMenuProps, SubMenuItem } from './SidebarMenu.types';

export const SidebarMenu = ({
  onHide,
  isVisible = true,
  menuTitle,
  menuSubTitle,
  menuTitleIcon,
  menu,
  translationPrefix,
  bannerColor,
  hasHideButton = true,
}: SidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const [width, setWidth] = useState<number | string>('auto');
  const [isGroupOpen, setGroupOpen] = useState<Record<string, boolean>>({});
  const ref = useRef<HTMLDivElement>(null);
  const { spacing } = useTheme();

  const classes = useStyles({
    width,
    bannerColor,
  });

  const handleWindowResize = () => {
    setWidth('auto');
  };

  window.addEventListener('resize', handleWindowResize);

  useEffect(() => {
    if (width !== ref?.current?.clientWidth) {
      setWidth(ref?.current?.clientWidth ?? 'auto');
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [ref, width, setWidth]);

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
    <Slide unmountOnExit mountOnEnter in={!hasHideButton || isVisible} direction="right">
      <Grid ref={ref} item xs={12} md={3} lg={2} className={classes.container}>
        <div>
          {hasHideButton && (
            <div
              className={classes.hideButton}
              onClick={() => {
                !!onHide && onHide();
              }}
            >
              <SidebarHideButton />
            </div>
          )}
          <div className={classes.menuWrapper}>
            <Box minHeight={48} mb={!!menu.back ? 0 : 2}>
              {menuTitle && typeof menuTitle === 'string' ? (
                <div className={classes.banner}>
                  {!!menuTitle && menuTitleIcon}
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h5">{menuTitle}</Typography>
                    {menuSubTitle && <Typography variant="h6">{menuSubTitle}</Typography>}
                  </Box>
                </div>
              ) : (
                menuTitle
              )}
            </Box>
            {!!menu.back && (
              <SideMenuItem
                className={classes.backToList}
                title={
                  <Link to={menu.back.url}>
                    <BackIcon />
                    {menu.back.title}
                  </Link>
                }
                selected={false}
              />
            )}
            <Scrollable width="100%" height={`calc(100vh - ${spacing(24)}px`}>
              <SideMenu disablePadding>
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
                        data-toggled={isGroupOpen[group.key as string]}
                        data-testid={`toggle-group-${group.key}`}
                      >
                        <Typography className={classes.collapseTitle}>{formatMessage({ id: group.key })}</Typography>
                        {!group.hideArrowIcon && (isGroupCollapseOpen(group) ? <ArrowUpIcon /> : <ArrowDownIcon />)}
                      </Box>
                    )}
                    <Collapse in={isGroupCollapseOpen(group)} timeout="auto" unmountOnExit>
                      {group.items.map(item => (
                        <SideMenuItem
                          key={item.key}
                          itemKey={item.key}
                          icon={item.icon ? item.icon : <SaleIcon />}
                          title={item?.title ? item.title : formatMessage({ id: `${translationPrefix}.${item.key}` })}
                          selected={pathname.startsWith(`${menu.url}/${item.key}`)}
                          badge={item.count}
                          onClick={() => (item.onClick ? item.onClick() : push(`${menu.url}/${item.key}`))}
                        >
                          {item.subItems?.map((subItem: SubMenuItem) => renderSubItem(subItem, item))}
                        </SideMenuItem>
                      ))}
                    </Collapse>
                  </Box>
                ))}
              </SideMenu>
            </Scrollable>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
