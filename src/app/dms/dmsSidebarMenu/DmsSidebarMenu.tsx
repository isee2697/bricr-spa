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
            title: 'dms.pim',
            onClick: () => push(`${AppRoute.dms}/pim/residential`),
            subItems: [
              {
                id: 'residential',
                title: 'dms.residential',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'new_construction',
                title: 'dms.new_construction',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'relet',
                title: 'dms.relet',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'commercial',
                title: 'dms.commercial',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'building_commercial',
                title: 'dms.building_commercial',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'agriculture',
                title: 'dms.agriculture',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'parkinglot',
                title: 'dms.parkinglot',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'building_plot',
                title: 'dms.building_plot',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'crm',
            icon: <FolderIcon />,
            hideIcon: false,
            title: 'dms.crm',
          },
          {
            key: 'sales',
            icon: <FolderIcon />,
            hideIcon: false,
            title: 'dms.sales',
          },
          {
            key: 'addFolder',
            icon: <AddIcon />,
            hideIcon: false,
            title: 'dms.add_folder',
            onClick: () => {},
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'templates',
        onClick: () => push(`${AppRoute.dms}/templatesEmail`),
        items: [
          {
            key: 'templatesEmail',
            title: 'dms.email',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesContract',
            title: 'dms.contract',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesNewsLetter',
            title: 'dms.newsletter',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesPrint',
            title: 'dms.print',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesSocialMedia',
            title: 'dms.social_media',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesListOfCase',
            title: 'dms.list_of_case',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesQuestionnaire',
            title: 'dms.questionnaire',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesSurvey',
            title: 'dms.survey',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
            ],
          },
          {
            key: 'templatesInvoices',
            title: 'dms.invoices',
            showArrowIcon: true,
            subItems: [
              {
                id: 'bricrTemplates',
                title: 'dms.bricr_templates',
                icon: <Box width={theme.spacing(3)} />,
              },
              {
                id: 'customTemplates',
                title: 'dms.custom_templates',
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
            title: 'dms.bricr_blocks',
            hideIcon: true,
          },
          {
            key: 'contentBlocks/custom',
            title: 'dms.custom_blocks',
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
            title: 'dms.imageLibrary',
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
          { key: 'templates', icon: <CrmIcon /> },
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
