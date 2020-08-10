import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { SettingsIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarTileCategory } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile.types';
import { useLayout } from 'context/layout';

export const SettingsSidebarMenu = () => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();

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
        items: [{ key: 'workflowTemplates' }],
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
