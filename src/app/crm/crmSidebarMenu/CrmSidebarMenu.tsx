import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';

import { CrmSidebarMenuProps } from './CrmSidebarMenu.types';

export const CrmSidebarMenu = ({ type, isVisible, onHide, onTypeChange }: CrmSidebarMenuProps) => {
  const { url } = useRouteMatch();

  const menu = {
    url,
    groups: [
      {
        items: [{ key: 'relations' }, { key: 'businesses' }],
      },
    ],
  };

  return (
    <SidebarMenu onHide={onHide} isVisible={isVisible} translationPrefix="crm.menu" menu={menu} menuTitle={undefined} />
  );
};
