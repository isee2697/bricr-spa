import React from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from 'ui/molecules';
import { Box, SidebarTitleTile, Typography, UserAvatar } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { ArrowUpIcon, ClockIcon, DocIcon, GraphArrowIcon, LinkIcon, NcRentIcon } from 'ui/atoms/icons';

import { CrmRelationsDetailsSidebarMenuProps } from './CrmRelationsDetailsSidebarMenu.types';
import { useStyles } from './CrmRelationsDetailsSidebarMenu.styles';

const getBackUrl = (routeParams: Record<string, string>) => {
  return AppRoute.crm;
};

export const CrmRelationsDetailsSidebarMenu = ({ onHide, isVisible, crm }: CrmRelationsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams();
  const classes = useStyles();
  const { push } = useHistory();

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
          { key: 'timeline', icon: <ClockIcon /> },
          { key: 'summary', icon: <DocIcon /> },
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
        isCollapsable: true,
        key: 'crm.details.menu.sales',
        onClick: () => push(`${url}/sales`),
        items: [
          {
            key: 'acquisition',
            onClick: () => push(`${url}/acquisition`),
          },
          {
            key: 'quotation',
            onClick: () => push(`${url}/quotation`),
          },
          {
            key: 'orders',
            onClick: () => push(`${url}/sales_orders`),
          },
          {
            key: 'invoices',
            onClick: () => push(`${url}/invoices`),
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
          },
          {
            key: 'documents/checklist',
            title: formatMessage({ id: 'crm.details.menu.documents.checklist' }),
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
        <>
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
          <Box display="flex" alignItems="center" mt={1} ml={4.5}>
            <LinkIcon fontSize="small" />
            <ArrowUpIcon fontSize="small" />
          </Box>
          <Box
            display="flex"
            ml={1}
            mt={1}
            mr={1}
            pt={1}
            pb={1}
            pl={2}
            pr={2}
            alignItems="center"
            className={classes.alternativeRelation}
          >
            <UserAvatar
              name={`${crm.firstName} ${crm.insertion} ${crm.lastName}`}
              avatar={crm.avatar?.url || ''}
              variant="rounded"
            />
            <Box ml={1}>
              <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                {crm.firstName} {crm.insertion} {crm.lastName}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {formatMessage({ id: 'crm.relation' })}
              </Typography>
            </Box>
          </Box>
        </>
      }
    />
  );
};
