import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { Box } from 'ui/atoms';

import { SalesSidebarMenuProps } from './SalesSidebarMenu.types';

export const SalesSidebarMenu = ({ onHide, isVisible }: SalesSidebarMenuProps) => {
  const { url } = useRouteMatch();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          {
            key: 'dashboard',
          },
          {
            key: 'leads',
            count: 280,
          },
          {
            key: 'acquisition',
            count: 45,
          },
          {
            key: 'quotation',
            count: 23,
          },
          {
            key: 'orders',
            count: 33,
          },
          {
            key: 'invoices',
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="sales.menu"
      menu={menu}
      menuTitle={<Box mb={6} />}
    />
  );
};
