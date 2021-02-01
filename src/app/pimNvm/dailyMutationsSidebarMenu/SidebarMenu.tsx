import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { DateTime } from 'luxon';

import { SidebarMenuProps } from '../nvmSearchSidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { useLocale } from 'hooks';
import { BuildingIcon } from 'ui/atoms/icons';
import { Box, SidebarTitleTile } from 'ui/atoms';

import { useStyles } from './SidebarMenu.styles';

export const DailyMutationsSidebarMenu = ({ onHide, isVisible }: SidebarMenuProps) => {
  const { url } = useRouteMatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          {
            key: `${DateTime.local().toLocaleString(DateTime.DATE_SHORT)} (${formatMessage({ id: 'common.today' })})`,
          },
          {
            key: DateTime.local()
              .plus({ day: 1 })
              .toLocaleString(DateTime.DATE_SHORT),
          },
          {
            key: DateTime.local()
              .plus({ day: 1 })
              .toLocaleString(DateTime.DATE_SHORT),
          },
          {
            key: DateTime.local()
              .plus({ day: 1 })
              .toLocaleString(DateTime.DATE_SHORT),
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      menuTitle={
        <SidebarTitleTile
          title={formatMessage({ id: 'nvm.title' })}
          icon={
            <Box className={classes.titleIcon} display="flex" alignItems="center" justifyContent="center">
              <BuildingIcon color="inherit" />
            </Box>
          }
        />
      }
      menuTitleIcon={<BuildingIcon />}
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="nvm.menu"
      menu={menu}
    />
  );
};
