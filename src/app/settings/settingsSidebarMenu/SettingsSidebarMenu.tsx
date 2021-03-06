import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useAuthState, useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { SettingsIcon, AogIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLayout } from 'context/layout';
import { SettingsProps } from 'app/settings/Settings.types';
import { MenuItem, SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

export const SettingsSidebarMenu = ({ data }: SettingsProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const { user, hasBillingAccess } = useAuthState();
  const { getTeams: teams } = data;

  const teamItems = ((teams?.items &&
    teams.items.map(team => ({
      key: `teams/${team.id}`,
      title: team.name,
      hideIcon: true,
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
            key: 'general/payment_methods',
            title: formatMessage({ id: 'settings.menu.general.payment_methods' }),
            icon: <AogIcon />,
            hideIcon: true,
          },
          {
            key: 'general/invoices',
            title: formatMessage({ id: 'settings.menu.general.invoices' }),
            icon: <AogIcon />,
            hideIcon: true,
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.user_options',
        items: [{ key: 'users', hideIcon: true }],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.teams',
        items: [{ key: 'createTeam', hideIcon: true }, ...teamItems],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.workflows',
        items: [
          {
            key: 'workflow_templates/bricr',
            title: formatMessage({ id: 'settings.menu.bricr_templates' }),
            icon: <AogIcon />,
            hideIcon: true,
          },
          {
            key: 'workflow_templates/custom',
            title: formatMessage({ id: 'settings.menu.custom_templates' }),
            icon: <AogIcon />,
            hideIcon: true,
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.documents',
        items: [
          { key: 'lvzProperty', hideIcon: true },
          { key: 'lvzBog', hideIcon: true },
          { key: 'questionnaireProperty', hideIcon: true },
          { key: 'questionnaireBog', hideIcon: true },
          { key: 'contractTemplates', hideIcon: true },
          { key: 'emailTemplate', hideIcon: true },
        ],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.checklists_documents',
        items: [{ key: 'livingSituation', hideIcon: true }],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.cadastre',
        items: [{ key: 'cadastre', hideIcon: true }],
      },
      {
        isCollapsable: true,
        key: 'settings.menu.allocate_criteria',
        items: [
          { key: 'bricrAllocateCriteria', hideIcon: true },
          {
            key: 'customAllocateCriteria',
            hideIcon: true,
          },
        ],
      },
      {
        items: [
          {
            key: 'keyboard',
            hideIcon: true,
          },
          {
            key: 'signboard',
            hideIcon: true,
          },
        ],
      },
    ],
  };

  if (user?.isAdmin) {
    menu.groups[0].items.splice(0, 0, {
      key: 'general/account',
      title: formatMessage({ id: 'settings.menu.general.account' }),
      icon: <AogIcon />,
      hideIcon: true,
    });
  }

  if (hasBillingAccess) {
    menu.groups[0].items.splice(2, 0, { key: 'general/billing', title: 'settings.menu.billing', hideIcon: true });
  }

  return (
    <SidebarMenu
      onHide={() => setSidebarMenuVisible(false)}
      isVisible={isSidebarMenuVisible}
      menu={menu}
      translationPrefix="settings.menu"
      menuTitle={formatMessage({ id: `settings.title` })}
      menuTitleIcon={<SettingsIcon color="inherit" />}
    />
  );
};
