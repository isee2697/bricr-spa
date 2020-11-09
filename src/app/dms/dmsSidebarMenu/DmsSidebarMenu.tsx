import React, { useState, ReactNode } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { CrmIcon, FolderIcon, AddIcon } from 'ui/atoms/icons';
import { DmsAddFolderDialog } from '../dmsDocuments/dmsAddFolderDialog/DmsAddFolderDialog';

import { DmsSidebarMenuProps } from './DmsSidebarMenu.types';

export const DmsSidebarMenu = ({ onHide, isVisible, onAddFolder }: DmsSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const [dialog, setDialog] = useState<ReactNode | null>(null);

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
