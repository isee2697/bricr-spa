import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { CRM_RELATIONS } from 'api/mocks/crm-relation';

import { CrmRelationsDetailsSidebarMenuProps } from './CrmRelationsDetailsSidebarMenu.types';

const getBackUrl = (routeParams: Record<string, string>) => {
  return AppRoute.crm;
};

export const CrmRelationsDetailsSidebarMenu = ({ onHide, isVisible }: CrmRelationsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams();

  const items: MenuItem[] = [];

  const menu = {
    url,
    back: {
      url: getBackUrl(params),
      title: formatMessage({ id: `crm.details.menu.back_to_relations_list` }),
    },
    groups: [
      {
        items: [
          { key: 'dashboard', selected: true },
          { key: 'timeline' },
          { key: 'summary' },
          { key: 'customerJourney' },
        ],
      },
      {
        isCollapsable: true,
        key: 'crm.details.menu.personal_information',
        items,
      },
      {
        items: [
          {
            key: 'documents',
          },
          {
            key: 'orders',
          },
        ],
      },
    ],
  };

  const selectedCrmRelation = CRM_RELATIONS[0];

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="crm.details.menu"
      menu={menu}
      menuTitle={
        <SidebarTitleTile
          title={selectedCrmRelation.property}
          subtitle={formatMessage({ id: 'crm.relation' })}
          icon={
            <UserAvatar name={selectedCrmRelation.property} avatar={selectedCrmRelation.avatar} variant="rounded" />
          }
        />
      }
    />
  );
};
