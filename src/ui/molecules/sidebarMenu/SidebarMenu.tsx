import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { Box, SideMenuItem, SideSubMenuItem, SidebarHideButton } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({ onHide, menuTitle, menu, translationPrefix }: SidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.hideButton} onClick={onHide}>
        <SidebarHideButton />
      </div>
      <div className={classes.menuWrapper}>
        {!!menuTitle && <Box mb={2}>{menuTitle}</Box>}
        <SideMenu className={classes.root} disablePadding>
          {menu.groups.map((groups, index) => (
            <Box className={classes.group} key={`group_${index}`}>
              {groups.items.map(item => (
                <SideMenuItem
                  key={item.key}
                  icon={<SaleIcon />}
                  title={formatMessage({ id: `${translationPrefix}.${item.key}` })}
                  selected={pathname.startsWith(`${menu.url}/${item.key}`)}
                  badge={item.count}
                  onClick={() => push(`${menu.url}/${item.key}`)}
                >
                  {item.subItems?.map(subItem => (
                    <SideSubMenuItem
                      key={subItem}
                      title={formatMessage({ id: `${translationPrefix}.${subItem}` })}
                      selected={pathname === `${menu.url}/${item.key}/${subItem}`}
                      onClick={() => push(`${menu.url}/${item.key}/${subItem}`)}
                    />
                  ))}
                </SideMenuItem>
              ))}
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
