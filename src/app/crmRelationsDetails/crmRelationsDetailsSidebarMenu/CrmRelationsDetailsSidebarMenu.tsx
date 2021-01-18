import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from 'ui/molecules';
import { SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { ClockIcon, DocIcon, GraphArrowIcon, NcRentIcon } from 'ui/atoms/icons';

import { CrmRelationsDetailsSidebarMenuProps } from './CrmRelationsDetailsSidebarMenu.types';

const getBackUrl = (routeParams: Record<string, string>) => {
  return AppRoute.crm;
};

export const CrmRelationsDetailsSidebarMenu = ({ onHide, isVisible, crm }: CrmRelationsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams();

  const menu: SidebarMenuType = {
    url,
    back: {
      url: getBackUrl(params),
      title: formatMessage({ id: `crm.details.menu.back_to_relations_list` }),
    },
    groups: [
      {
        items: [
          { key: 'dashboard', icon: <GraphArrowIcon /> },
          {
            key: 'customer_journey',
            icon: <NcRentIcon />,
            subItems: [
              {
                id: 'your_new_home',
                label: 'crm.details.menu.customer_journey.your_new_home',
              },
            ],
          },
          { key: 'summary', icon: <DocIcon /> },
          { key: 'timeline', icon: <ClockIcon /> },
        ],
      },
      {
        isCollapsable: true,
        key: 'crm.details.menu.personal_information',
        items: [
          { key: 'personal_information_general' },
          { key: 'personal_information_contact_information' },
          { key: 'personal_information_family_and_contacts' },
          { key: 'personal_information_home_situation' },
          { key: 'personal_information_financial_profile' },
          { key: 'personal_information_match_profile' },
        ],
      },
      {
        items: [
          {
            key: 'sales',
            showArrowIcon: true,
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
            key: 'documents',
            showArrowIcon: true,
            subItems: [
              {
                id: 'folders',
                label: 'crm.details.menu.documents.folders',
              },
              {
                id: 'checklist',
                label: 'crm.details.menu.documents.checklist',
              },
            ],
          },
          {
            key: 'orders',
          },
        ],
      },
      {
        key: 'crm.details.menu.marketing',
        isCollapsable: true,
        items: [{ key: 'marketing_news_letter' }, { key: 'marketing_target_groups' }, { key: 'marketing_cross_sell' }],
      },
      {
        key: 'crm.details.menu.business_info',
        isCollapsable: true,
        items: [{ key: 'linked_businesses' }],
      },
    ],
  };

  const title = crm.firstName + (crm.insertion ? ` ${crm.insertion} ` : ' ') + crm.lastName;

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="crm.details.menu"
      menu={menu}
      menuTitle={
        <SidebarTitleTile
          title={title}
          subtitle={formatMessage({ id: 'crm.relation' })}
          icon={
            <UserAvatar
              name={`${crm.firstName} ${crm.insertion} ${crm.lastName}`}
              avatar={crm.avatar?.url || ''}
              variant="rounded"
            />
          }
        />
      }
    />
  );
};
