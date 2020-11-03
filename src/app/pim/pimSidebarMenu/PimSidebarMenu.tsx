import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from '../../../routing/AppRoute.enum';
import { DashboardIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { PimSidebarMenuProps } from './PimSidebarMenu.types';
export const PimSidebarMenu = ({ types }: PimSidebarMenuProps) => {
  const { push, location } = useHistory();
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

  const activeItem = groupItems.find(item => location.pathname.includes(item.key));

  return (
    <SidebarMenu
      hasHideButton={false}
      translationPrefix="pim.type"
      menuTitle={activeItem && formatMessage({ id: `pim.type.${activeItem.key}` })}
      menuTitleIcon={activeItem?.icon}
      menu={menu}
    />
  );
};
