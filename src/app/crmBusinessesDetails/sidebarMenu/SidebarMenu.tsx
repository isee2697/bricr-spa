import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from 'ui/molecules';
import { SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { CRM_BUSINESSES } from 'api/mocks/crm-business';

import { CrmBusinessDetailsSidebarMenuProps } from './SidebarMenu.types';

const getBackUrl = (routeParams: Record<string, string>) => {
  return `${AppRoute.crm}/businesses`;
};

export const CrmBusinessDetailsSidebarMenu = ({ onHide, isVisible }: CrmBusinessDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams();

  const menu: SidebarMenuType = {
    url,
    back: {
      url: getBackUrl(params),
      title: formatMessage({ id: `crm.details.menu.back_to_businesses_list` }),
    },
    groups: [
      {
        items: [
          { key: 'dashboard' },
          { key: 'timeline' },
          { key: 'summary' },
          {
            key: 'business_journey',
            subItems: [
              {
                id: 'your_new_home',
                label: 'crm.details.menu.business_journey.your_new_home',
              },
            ],
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'crm.details.menu.personal_information',
        items: [
          { key: 'personal_information_general', hideIcon: true },
          { key: 'personal_information_contact_information', hideIcon: true },
          { key: 'personal_information_contacts', hideIcon: true },
          { key: 'personal_information_home_situation', hideIcon: true },
          { key: 'personal_information_financial_profile', hideIcon: true },
          { key: 'personal_information_match_profile', hideIcon: true },
        ],
      },
      {
        items: [
          {
            key: 'sales',
            subItems: [
              {
                id: 'acquisition',
                label: 'crm.details.menu.sales.acquisition',
              },
              {
                id: 'quotation',
                label: 'crm.details.menu.sales.quotation',
              },
              {
                id: 'orders',
                label: 'crm.details.menu.sales.orders',
              },
              {
                id: 'invoices',
                label: 'crm.details.menu.sales.invoices',
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            key: 'orders',
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'crm.details.menu.documents',
        items: [
          {
            key: 'documents/folders',
            title: formatMessage({ id: 'crm.details.menu.documents.folders' }),
            hideIcon: true,
          },
          {
            key: 'documents/checklist',
            title: formatMessage({ id: 'crm.details.menu.documents.checklist' }),
            hideIcon: true,
          },
        ],
      },
      {
        key: 'crm.details.menu.marketing',
        isCollapsable: true,
        items: [
          { key: 'marketing_news_letter', hideIcon: true },
          { key: 'marketing_target_groups', hideIcon: true },
          { key: 'marketing_cross_sell', hideIcon: true },
        ],
      },
      {
        key: 'crm.details.menu.business_info',
        isCollapsable: true,
        items: [{ key: 'linked_businesses', hideIcon: true }],
      },
    ],
  };

  const selectedCrmBusiness = CRM_BUSINESSES[0];

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="crm.details.menu"
      menu={menu}
      menuTitle={
        <SidebarTitleTile
          title={selectedCrmBusiness.property}
          subtitle={formatMessage({ id: 'crm.business' })}
          icon={
            <UserAvatar name={selectedCrmBusiness.property} avatar={selectedCrmBusiness.avatar.url} variant="rounded" />
          }
        />
      }
    />
  );
};
