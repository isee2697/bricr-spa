type AddNewSpaceBody = {
  type: string;
  description: string;
  extraRoom: boolean;
};

export type AddNewSpaceSubmit = (
  body: AddNewSpaceBody,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddNewSpaceModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

export type AddNewSpaceModalProps = AddNewSpaceModalContainerProps & {
  onSubmit: AddNewSpaceSubmit;
};
