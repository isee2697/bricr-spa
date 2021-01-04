import React from 'react';

import { EmailSidebarMenu } from './EmailSidebarMenu';
import { EmailSidebarMenuContainerProps } from './EmailSidebarMenu.types';

export const EmailSidebarMenuContainer = (props: EmailSidebarMenuContainerProps) => {
  return <EmailSidebarMenu {...props} />;
};
