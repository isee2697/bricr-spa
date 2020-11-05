import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SidebarMenu } from 'ui/molecules';
import { Box } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { useLocale } from 'hooks';

import { EmailSidebarMenuProps } from './EmailSidebarMenu.types';

export const EmailSidebarMenu = ({ onHide, isVisible }: EmailSidebarMenuProps) => {
  const { url } = useRouteMatch();
  const { formatMessage } = useLocale();

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          {
            key: 'inbox',
            count: 280,
            subItems: [
              {
                id: 'folder_1',
                label: 'email.menu.inbox.folder_1',
                number: 1,
              },
              {
                id: 'folder_2',
                label: 'email.menu.inbox.folder_2',
              },
              {
                id: 'folder_3',
                label: 'email.menu.inbox.folder_3',
                number: 2,
              },
              {
                id: 'new_folder',
                title: `+ ${formatMessage({ id: 'email.menu.inbox.new_folder' })}`,
                onClick: () => {},
              },
            ],
          },
          {
            key: 'pinned',
            count: 30,
          },
          {
            key: 'sent',
            count: 0,
          },
          {
            key: 'concepts',
            count: 2,
          },
          {
            key: 'spam',
            count: 3,
          },
          {
            key: 'bin',
            count: 0,
          },
          {
            key: 'archive',
            count: 0,
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="email.menu"
      menu={menu}
      menuTitle={<Box mb={6} />}
    />
  );
};
