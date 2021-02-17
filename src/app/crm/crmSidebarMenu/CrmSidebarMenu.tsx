import React from 'react';
import { useHistory } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { CrmIcon, RoundBusinessCenterIcon } from 'ui/atoms/icons';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { CrmSidebarMenuProps } from './CrmSidebarMenu.types';

export const CrmSidebarMenu = ({ isVisible, onHide }: CrmSidebarMenuProps) => {
  const { push } = useHistory();

  const menu: SidebarMenuType = {
    url: AppRoute.crm,
    groups: [
      {
        items: [
          {
            key: 'relations',
            icon: <CrmIcon />,
            onClick: () => push(`${AppRoute.crm}/relations`),
          },
          {
            key: 'businesses',
            icon: <RoundBusinessCenterIcon />,
            onClick: () => push(`${AppRoute.crm}/businesses`),
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      hasHideButton
      translationPrefix="crm"
      menuTitle={<></>}
      menu={menu}
      onHide={onHide}
      isVisible={isVisible}
    />
  );
};
