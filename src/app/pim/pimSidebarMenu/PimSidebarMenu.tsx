import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from '../../../routing/AppRoute.enum';
import { DashboardIcon } from 'ui/atoms/icons';

import { PimSidebarMenuProps } from './PimSidebarMenu.types';
export const PimSidebarMenu = ({ types }: PimSidebarMenuProps) => {
  const { push } = useHistory();

  const menu = {
    url: AppRoute.pim,
    groups: [
      {
        isCollapsable: false,
        key: 'pim',
        items: [
          {
            key: 'portfolio_dashboard',
            icon: <DashboardIcon />,
            onClick: () => push(AppRoute.pim),
          },
          ...types.map(type => ({
            key: `type.${type.name}`,
            icon: type.icon,
            onClick: () => push(`${AppRoute.pim}/${type.name}`),
          })),
        ],
      },
    ],
  };

  return <SidebarMenu hasHideButton={false} translationPrefix={'pim'} menu={menu} />;
};
