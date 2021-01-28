import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SidebarMenu } from 'ui/molecules';
import { CrmIcon, SaleIcon } from 'ui/atoms/icons';

import { DocumentDetailsSidebarMenuProps } from './DocumentDetailsSidebarMenu.types';

export const DocumentDetailsSidebarMenu = ({ onHide, isVisible, title, path }: DocumentDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

  const menu = {
    url,
    back: {
      url: path,
      title: formatMessage({ id: `common.back` }),
    },
    groups: [
      {
        items: [
          { key: 'actual-document', icon: <CrmIcon /> },
          { key: 'document-settings', icon: <CrmIcon /> },
          { key: 'previous-versions', icon: <CrmIcon /> },
          { key: 'audit-trail', icon: <CrmIcon /> },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="crm.details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={title}
      menuSubTitle={formatMessage({ id: 'common.sidebar_property.property' })}
    />
  );
};
