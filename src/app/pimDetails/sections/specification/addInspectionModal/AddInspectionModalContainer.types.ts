export type AddInspectionModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  type: 'Tank' | 'Pollution' | 'Maintenance';
  onAddCustomType: VoidFunction;
};
