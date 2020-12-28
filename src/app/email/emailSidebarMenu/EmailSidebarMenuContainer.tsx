import React from 'react';

import { useListEmailFoldersQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { EmailSidebarMenu } from './EmailSidebarMenu';
import { EmailSidebarMenuContainerProps } from './EmailSidebarMenu.types';

export const EmailSidebarMenuContainer = ({ onHide, isVisible, accounts }: EmailSidebarMenuContainerProps) => {
  const { data } = useListEmailFoldersQuery();

  if (!data?.listEmailFolders) {
    return <Loader />;
  }

  return (
    <EmailSidebarMenu onHide={onHide} isVisible={isVisible} accounts={accounts} folders={data?.listEmailFolders} />
  );
};
