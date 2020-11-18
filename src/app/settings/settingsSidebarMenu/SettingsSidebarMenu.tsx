import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useAuthState, useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { SettingsIcon, AogIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarTileCategory } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile.types';
import { useLayout } from 'context/layout';
import { SettingsProps } from 'app/settings/Settings.types';
import { MenuItem, SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

export const SettingsSidebarMenu = ({ data }: SettingsProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const { hasBillingAccess } = useAuthState();
  const { getTeams: teams } = data;

  const teamItems = ((teams?.items &&
    teams.items.map(team => ({
      key: `teams/${team.id}`,
      title: team.name,
    }))) ||
    []) as MenuItem[];

  const menu: SidebarMenuType = {
    url: url,
    back: {
      url: AppRoute.home,
      title: formatMessage({ id: `settings.goBack` }),
    },
    groups: [
      {
        isCollapsable: true,
        key: 'settings.menu.general',
        items: [
          {
            key: 'workflow_templates',
            subItems: [
              {
                id: 'bricr',
                label: 'settings.menu.bricr_templates',
                icon: (
                  <div style={{ marginLeft: 30 }}>
                    <AogIcon color="primary" />
                  </div>
                ),
              },
              {
                id: 'custom',
                label: 'settings.menu.custom_templates',
                icon: (
                  <div style={{ color: 'orange', marginLeft: 30 }}>
                    <AogIcon color="inherit" />
                  </div>
                ),
              },
            ],
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.user_options',
        items: [{ key: 'users' }],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.teams',
        items: [{ key: 'createTeam' }, ...teamItems],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.documents',
        items: [
          { key: 'lvzProperty' },
          { key: 'lvzBog' },
          { key: 'questionnaireProperty' },
          { key: 'questionnaireBog' },
          { key: 'contractTemplates' },
        ],
      },
    ],
  };

  if (hasBillingAccess) {
    menu.groups[0].items.push({ key: 'billing' });
  }

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
