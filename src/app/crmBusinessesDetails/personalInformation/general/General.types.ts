export type PersonalInformationGeneralProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type PersonalInformationGeneralContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
