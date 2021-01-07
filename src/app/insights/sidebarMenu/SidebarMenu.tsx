import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { ClockIcon, SalesIcon, ShortcutsIcon } from 'ui/atoms/icons';
import { SidebarTitleTile, Box } from 'ui/atoms';

import { useStyles } from './SidebarMenu.styles';
import { InsightsSidebarMenuProps } from './SidebarMenu.types';

export const InsightsSidebarMenu = ({ dashboards }: InsightsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const classes = useStyles();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          {
            key: 'dashboards',
            icon: <ShortcutsIcon />,
            subItems: dashboards.map(dashboard => ({
              id: dashboard.id,
              label: dashboard.title,
            })),
          },
          {
            key: 'charts',
            icon: <ClockIcon />,
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      translationPrefix="insights.menu"
      menu={menu}
      menuTitle={
        <SidebarTitleTile
          title={formatMessage({ id: 'insights.title' })}
          icon={
            <Box className={classes.titleIcon} display="flex" alignItems="center" justifyContent="center">
              <SalesIcon color="inherit" />
            </Box>
          }
        />
      }
    />
  );
};
