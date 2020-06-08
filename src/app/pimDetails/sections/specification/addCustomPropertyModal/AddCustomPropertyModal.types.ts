export type AddCustomPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

export type AddCustomPropertyModalProps = AddCustomPropertyModalContainerProps & {
  onSubmit: () => {};
};
