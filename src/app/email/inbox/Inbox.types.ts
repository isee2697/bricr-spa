import { Email } from '../Email.types';

export type EmailInboxContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type EmailInboxProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  emails: Email[];
  onAddNewEmail: VoidFunction;
};
