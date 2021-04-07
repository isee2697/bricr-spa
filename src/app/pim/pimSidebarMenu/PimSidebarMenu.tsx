import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { DashboardIcon, SaleIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { PimSidebarMenuProps } from './PimSidebarMenu.types';

export const PimSidebarMenu = ({ types }: PimSidebarMenuProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();

  const groupItems = types.map(type => ({
    key: type.name,
    icon: type.icon,
    onClick: () => push(`${AppRoute.pim}/${type.name}`),
  }));

  const externalGroupItems = [
    {
      key: 'nvm',
      title: 'NVM',
    },
    {
      key: 'purchase',
      title: formatMessage({ id: `pim.purchase` }),
    },
    {
      key: 'lms',
      title: 'LMS',
    },
  ];

  const menu: SidebarMenuType = {
    url: AppRoute.pim,
    groups: [
      {
        isCollapsable: false,
        key: 'pim',
        items: [
          {
            key: 'dashboard',
            icon: <DashboardIcon />,
            onClick: () => push(AppRoute.pim),
          },
        ],
      },
      {
        items: [...groupItems],
      },
      {
        key: 'externalPim',
        isCollapsable: true,
        items: [...externalGroupItems],
      },
    ],
  };

  return (
    <SidebarMenu
      hasHideButton={false}
      translationPrefix="pim.type"
      menuTitle={formatMessage({ id: 'header.links.pim' })}
      menuTitleIcon={<SaleIcon />}
      menu={menu}
    />
  );
};
