import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { DashboardIcon, SaleIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { PimSidebarMenuProps } from './PimSidebarMenu.types';

export const PimSidebarMenu = ({ types }: PimSidebarMenuProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();

  const groupItems = types.map(type => ({
    key: type.name,
    icon: type.icon,
    onClick: () => push(`${AppRoute.pim}/${type.name}`),
  }));

  const menu = {
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
          ...groupItems,
        ],
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
