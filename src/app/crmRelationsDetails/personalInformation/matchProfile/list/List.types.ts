export type ListProps = ListContainerProps & {};

export type ListContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
