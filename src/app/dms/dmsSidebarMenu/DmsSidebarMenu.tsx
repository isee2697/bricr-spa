import React, { useState, ReactNode } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box } from 'ui/atoms';
import { CrmIcon, FolderIcon, AddIcon, GraphArrowIcon } from 'ui/atoms/icons';
import { DmsAddFolderDialog } from '../dmsPims/dmsFolders/dmsAddFolderDialog/DmsAddFolderDialog';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { DmsSidebarMenuProps } from './DmsSidebarMenu.types';

export const DmsSidebarMenu = ({ onHide, isVisible, onAddFolder }: DmsSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const theme = useTheme();
  const { push } = useHistory();

  const handleAddFolder = () => {
    if (onAddFolder) {
      setDialog(
        <DmsAddFolderDialog
          isOpened={true}
          isAdd={true}
          onClose={() => {
            setDialog(null);
          }}
          onSubmit={({ folderName }) => {
            onAddFolder(folderName);
            setDialog(null);

            return new Promise(resolve => {});
          }}
        />,
      );
    }
  };

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
            icon: <FolderIcon />,
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
            icon: <FolderIcon />,
            hideIcon: false,
            title: 'dms.menu.crm',
          },
          {
            key: 'sales',
            icon: <FolderIcon />,
            hideIcon: false,
            title: 'dms.menu.sales',
          },
          {
            key: 'addFolder',
            icon: <AddIcon />,
            hideIcon: false,
            title: 'dms.menu.add_folder',
            onClick: () => {},
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
        onClick: () => push(`${AppRoute.dms}/contentBlocks`),
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
      {
        items: [
          {
            key: 'documents',
            icon: <CrmIcon />,
            subItems: [
              {
                id: 'pim',
                label: 'dms.menu.pim',
                icon: (
                  <div style={{ marginLeft: 30 }}>
                    <FolderIcon color="inherit" />
                  </div>
                ),
              },
              {
                id: 'crm',
                label: 'dms.menu.crm',
                icon: (
                  <div style={{ marginLeft: 30 }}>
                    <FolderIcon color="inherit" />
                  </div>
                ),
              },
              {
                id: 'sales',
                label: 'dms.menu.sales',
                icon: (
                  <div style={{ marginLeft: 30 }}>
                    <FolderIcon color="inherit" />
                  </div>
                ),
              },
              {
                id: 'add_folder',
                label: 'dms.menu.add_folder',
                icon: (
                  <div style={{ marginLeft: 30 }}>
                    <AddIcon color="inherit" />
                  </div>
                ),
                onClick: handleAddFolder,
              },
            ],
          },
          { key: 'content-blocks', icon: <CrmIcon /> },
          { key: 'image-library', icon: <CrmIcon /> },
        ],
      },
    ],
  };

  return (
    <>
      <SidebarMenu onHide={onHide} isVisible={isVisible} translationPrefix="dms.menu" menu={menu} />
      {dialog}
    </>
  );
};
