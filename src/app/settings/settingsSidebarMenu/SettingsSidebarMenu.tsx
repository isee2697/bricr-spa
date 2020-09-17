import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { SettingsIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarTileCategory } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile.types';
import { useLayout } from 'context/layout';
import { SettingsProps } from 'app/settings/Settings.types';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

export const SettingsSidebarMenu = ({ data }: SettingsProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const { getTeams: teams } = data;

  const teamItems = ((teams?.items && teams.items.map(team => ({ key: `teams/${team.id}`, title: team.name }))) ||
    []) as MenuItem[];

  const menu = {
    url: url,
    back: {
      url: AppRoute.home,
      title: formatMessage({ id: `settings.goBack` }),
    },
    groups: [
      {
        isCollapsable: true,
        key: 'settings.menu.general',
        items: [{ key: 'workflowTemplates' }, { key: 'billing' }],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.teams',
        items: [{ key: 'createTeam' }, ...teamItems],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={() => setSidebarMenuVisible(false)}
      isVisible={isSidebarMenuVisible}
      menu={menu}
      translationPrefix="settings.menu"
      menuTitle={
        <SidebarTitleTile
          title={formatMessage({ id: `settings.title` })}
          category={SidebarTileCategory.OTHER}
          icon={<SettingsIcon color="inherit" />}
        />
      }
    />
  );
};
