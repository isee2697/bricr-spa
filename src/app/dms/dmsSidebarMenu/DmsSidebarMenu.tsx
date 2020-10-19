import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { CrmIcon, FolderIcon, AddIcon } from 'ui/atoms/icons';

import { DmsSidebarMenuProps } from './DmsSidebarMenu.types';

export const DmsSidebarMenu = ({ onHide, isVisible }: DmsSidebarMenuProps) => {
  const { url } = useRouteMatch();

  const menu = {
    url,
    groups: [
      {
        items: [
          { key: 'dashboard', selected: true, icon: <CrmIcon /> },
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
              },
            ],
          },
          { key: 'templates', icon: <CrmIcon /> },
          { key: 'content_blocks', icon: <CrmIcon /> },
          { key: 'image_library', icon: <CrmIcon /> },
        ],
      },
    ],
  };

  return <SidebarMenu onHide={onHide} isVisible={isVisible} translationPrefix="dms.menu" menu={menu} />;
};
