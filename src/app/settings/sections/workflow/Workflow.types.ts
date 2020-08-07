export type WorkflowProps = {
  onToggleFullScreen: (isFullScreen: boolean) => void;
  name: string;
  iconName: string;
  goBack: VoidFunction;
};
