import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box } from 'ui/atoms';
import { FolderSvgIcon, GraphArrowIcon } from 'ui/atoms/icons';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { DmsEntityType, SalesLabel } from 'api/types';
import { PimTypes } from 'app/pim/dictionaries';

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
        onClick: () => push(`${AppRoute.dms}/${DmsEntityType.Pim}/residential`),
        items: [
          {
            key: DmsEntityType.Pim,
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: `dms.menu.${DmsEntityType.Pim}`,
            onClick: () => push(`${AppRoute.dms}/${DmsEntityType.Pim}/residential`),
            subItems: PimTypes.map(item => ({
              id: item.name,
              title: `dms.menu.${item.name}`,
              icon: <Box width={theme.spacing(3)} />,
            })),
          },
          {
            key: DmsEntityType.Crm,
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: `dms.menu.${DmsEntityType.Crm}`,
            onClick: () => push(`${AppRoute.dms}/${DmsEntityType.Crm}/relations`),
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
            key: DmsEntityType.Sales,
            icon: <FolderSvgIcon />,
            hideIcon: false,
            title: `dms.menu.${DmsEntityType.Sales}`,
            onClick: () => push(`${AppRoute.dms}/${DmsEntityType.Sales}/${SalesLabel.Lead}`),
            subItems: Object.keys(SalesLabel).map(label => ({
              id: label,
              title: `dms.menu.${label}`,
              icon: <Box width={theme.spacing(3)} />,
            })),
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
    <>
      <SidebarMenu
        onHide={onHide}
        isVisible={isVisible}
        translationPrefix="dms.menu"
        menu={menu}
        menuTitle={formatMessage({ id: 'dms.title' })}
        menuTitleIcon={<FolderSvgIcon color="inherit" />}
      />
    </>
  );
};
