export type ContactInformationProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type ContactInformationContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
