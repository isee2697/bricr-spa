import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SidebarMenu } from 'ui/molecules';
import { CrmIcon, SaleIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { DocumentDetailsSidebarMenuProps } from './DocumentDetailsSidebarMenu.types';

export const DocumentDetailsSidebarMenu = ({ onHide, isVisible, title }: DocumentDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams<{ id: string }>();

  const menu = {
    url,
    back: {
      url: `${AppRoute.crmRelationsDetails.replace(':id', params.id)}/documents`,
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
