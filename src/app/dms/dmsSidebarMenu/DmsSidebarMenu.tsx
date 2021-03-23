import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box } from 'ui/atoms';
import { FolderSvgIcon, GraphArrowIcon } from 'ui/atoms/icons';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

import { DmsSidebarMenuProps } from './DmsSidebarMenu.types';

export const DmsSidebarMenu = ({ onHide, isVisible }: DmsSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        isCollapsable: false,
        key: 'dms',
        spaceAfter: true,
        items: [
          {
            key: 'dashboard',
            icon: <GraphArrowIcon />,
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'folders',
        onClick: () => push(`${AppRoute.dms}/pim/residential`),
        items: [
          {
            key: 'pim',
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: 'dms.menu.pim',
            onClick: () => push(`${AppRoute.dms}/pim/residential`),
            subItems: [
              {
                id: 'residential',
                title: 'dms.menu.residential',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'new_construction',
                title: 'dms.menu.new_construction',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'relet',
                title: 'dms.menu.relet',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'commercial',
                title: 'dms.menu.commercial',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'building_commercial',
                title: 'dms.menu.building_commercial',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'agriculture',
                title: 'dms.menu.agriculture',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'parkinglot',
                title: 'dms.menu.parkinglot',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'building_plot',
                title: 'dms.menu.building_plot',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'crm',
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: 'dms.menu.crm',
            onClick: () => push(`${AppRoute.dms}/crm/relations`),
            subItems: [
              {
                id: 'relations',
                title: 'dms.menu.crm_relations',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'businesses',
                title: 'dms.menu.crm_businesses',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'sales',
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: 'dms.menu.sales',
            onClick: () => push(`${AppRoute.dms}/sales/leads`),
            subItems: [
              {
                id: 'leads',
                title: 'dms.menu.leads',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'orders',
                title: 'dms.menu.orders',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'invoices',
                title: 'dms.menu.invoices',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'templates',
        onClick: () => push(`${AppRoute.dms}/templates/email`),
        items: [
          {
            key: 'templates/email',
            title: 'dms.menu.email',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/contract',
            title: 'dms.menu.contract',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/newsletter',
            title: 'dms.menu.newsletter',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/print',
            title: 'dms.menu.print',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/social_media',
            title: 'dms.menu.social_media',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/list_of_case',
            title: 'dms.menu.list_of_case',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/questionnaire',
            title: 'dms.menu.questionnaire',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/survey',
            title: 'dms.menu.survey',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templates/invoices',
            title: 'dms.invoices',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricr',
                title: 'dms.menu.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'custom',
                title: 'dms.menu.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'contentBlocks',
        onClick: () => push(`${AppRoute.dms}/contentBlocks/bricr`),
        items: [
          {
            key: 'contentBlocks/bricr',
            title: 'dms.menu.bricr_blocks',
            hideIcon: true,
          },
          {
            key: 'contentBlocks/custom',
            title: 'dms.menu.custom_blocks',
            hideIcon: true,
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'imageLibrary',
        onClick: () => push(`${AppRoute.dms}/imageLibrary`),
        items: [
          {
            key: 'imageLibrary',
            title: 'dms.menu.image_library',
            hideIcon: true,
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="dms.menu"
      menu={menu}
      menuTitle={formatMessage({ id: 'dms.title' })}
      menuTitleIcon={<FolderSvgIcon color="inherit" />}
      actionHeight={20}
    />
  );
};
