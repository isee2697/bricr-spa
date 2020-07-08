import React from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { SideMenuItem } from 'ui/atoms';
import { SaleIcon } from 'ui/atoms/icons';

import { useStyles } from './ProjectDetailsSidebarMenu.styles';

const menuItems = [
  'dashboard',
  'summary',
  'projectJourney',
  'salesSettings',
  'general',
  'characteristics',
  'prices',
  'services',
  'media',
  'objectTypes',
  'properties',
];

export const ProjectDetailsSidebarMenu = () => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <SideMenu className={classes.root} disablePadding>
      {menuItems.map(itemName => (
        <SideMenuItem
          key={itemName}
          icon={<SaleIcon />}
          title={formatMessage({ id: `project_details.menu.${itemName}` })}
          selected={pathname.startsWith(`${url}/${itemName}`)}
          onClick={() => push(`${url}/${itemName}`)}
        />
      ))}
    </SideMenu>
  );
};
