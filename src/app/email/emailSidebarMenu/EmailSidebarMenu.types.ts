export type EmailSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
};

export type EmailSidebarMenuItemProps = {
  value: string;
  count?: number;
};

export type EmailSidebarMenuSubItemProps = {
  id: string;
  title: string;
  selected: boolean;
};
