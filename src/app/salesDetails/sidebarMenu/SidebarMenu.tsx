import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { CrmIcon } from 'ui/atoms/icons';

import { SalesDetailsSidebarMenuProps } from './SidebarMenu.types';

export const SalesDetailsSidebarMenu = ({ onHide, isVisible }: SalesDetailsSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const { formatMessage } = useLocale();

  const menu: SidebarMenuType = {
    url,
    back: {
      url: AppRoute.sales,
      title: formatMessage({ id: `sales_details.menu.back_to_list` }),
    },
    groups: [
      {
        items: [
          {
            key: 'dashboard',
            icon: <CrmIcon />,
          },
          {
            key: 'general',
            icon: <></>,
          },
          {
            key: 'client',
            icon: <></>,
          },
          {
            key: 'contracts',
            icon: <></>,
          },
          {
            key: 'acquisitionDetails',
            icon: <></>,
          },
          {
            key: 'quotationDetails',
            icon: <></>,
          },
          {
            key: 'salesDetails',
            icon: <></>,
          },
          {
            key: 'brokerage',
            icon: <></>,
          },
          {
            key: 'costs',
            icon: <></>,
          },
          {
            key: 'dates',
            icon: <></>,
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      translationPrefix="sales_details.menu"
      menu={menu}
      onHide={onHide}
      isVisible={isVisible}
      menuTitle={
        <SidebarTitleTile
          title={'Waterlooplein'}
          subtitle={formatMessage({ id: 'sales_details.sales_order' })}
          icon={<UserAvatar name={'Waterlooplein'} avatar={'http://placeimg.com/24/24/people'} variant="rounded" />}
        />
      }
    />
  );
};
