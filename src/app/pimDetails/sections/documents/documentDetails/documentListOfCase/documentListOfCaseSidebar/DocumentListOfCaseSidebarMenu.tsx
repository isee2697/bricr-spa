import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SidebarMenu } from 'ui/molecules';
import { LockIcon, SaleIcon, TriggerIcon } from 'ui/atoms/icons';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { DocumentKind } from '../../../general/General.types';

import { DocumentListOfCaseSidebarMenuProps } from './DocumentListOfCaseSidebarMenu.types';

export const DocumentListOfCaseSidebarMenu = ({
  onHide,
  isVisible,
  title,
  kind,
}: DocumentListOfCaseSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

  let items: MenuItem[] = [];
  let subtitle = '';

  if (!kind || kind === DocumentKind.ListOfCase || kind === DocumentKind.Custom) {
    items = [
      { key: 'data', icon: <TriggerIcon /> },
      { key: 'security', icon: <LockIcon /> },
    ];
    subtitle = formatMessage({ id: 'common.sidebar_property.link_movable' });
  }

  const menu = {
    url,
    groups: [
      {
        items,
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={title}
      menuSubTitle={subtitle}
    />
  );
};
