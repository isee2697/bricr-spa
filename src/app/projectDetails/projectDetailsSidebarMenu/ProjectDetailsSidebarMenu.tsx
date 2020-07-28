import React from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons';
import { SidebarHideButton } from 'ui/atoms/sidebarHideButton/SidebarHideButton';

import { useStyles } from './ProjectDetailsSidebarMenu.styles';
import { ProjectDetailsSidebarMenuProps } from './ProjectDetailsSidebarMenu.types';

export const ProjectDetailsSidebarMenu = ({ onHide, objectTypeNumber }: ProjectDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();

  const menuItems = [
    { key: 'dashboard' },
    { key: 'summary' },
    { key: 'projectJourney' },
    { key: 'salesSettings' },
    { key: 'general' },
    { key: 'characteristics' },
    { key: 'prices', subItems: ['costs', 'interests'] },
    { key: 'services' },
    { key: 'media' },
    { key: 'objectTypes', count: objectTypeNumber },
    { key: 'properties', count: 0 },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.hideButton} onClick={onHide}>
        <SidebarHideButton />
      </div>
      <div className={classes.menuWrapper}>
        <SideMenu className={classes.root} disablePadding>
          {menuItems.map(item => (
            <SideMenuItem
              key={item.key}
              icon={<SaleIcon />}
              title={formatMessage({ id: `project_details.menu.${item.key}` })}
              selected={pathname.startsWith(`${url}/${item.key}`)}
              badge={item.count}
              onClick={() => push(`${url}/${item.key}`)}
            >
              {item.subItems?.map(subItem => (
                <SideSubMenuItem
                  key={subItem}
                  title={formatMessage({ id: `project_details.menu.${subItem}` })}
                  selected={pathname === `${url}/${item.key}/${subItem}`}
                  onClick={() => push(`${url}/${item.key}/${subItem}`)}
                />
              ))}
            </SideMenuItem>
          ))}
        </SideMenu>
      </div>
    </div>
  );
};
