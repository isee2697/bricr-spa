import React from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons';

import { useStyles } from './ProjectDetailsSidebarMenu.styles';

const menuItems = [
  { key: 'dashboard' },
  { key: 'summary' },
  { key: 'projectJourney' },
  { key: 'salesSettings' },
  { key: 'general' },
  { key: 'characteristics' },
  { key: 'prices', subItems: ['costs'] },
  { key: 'services' },
  { key: 'media' },
  { key: 'objectTypes' },
  { key: 'properties' },
];

export const ProjectDetailsSidebarMenu = () => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <SideMenu className={classes.root} disablePadding>
      {menuItems.map(item => (
        <SideMenuItem
          key={item.key}
          icon={<SaleIcon />}
          title={formatMessage({ id: `project_details.menu.${item.key}` })}
          selected={pathname.startsWith(`${url}/${item.key}`)}
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
  );
};
