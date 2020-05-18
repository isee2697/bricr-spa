import { FloorType } from 'api/types';

type AddNewFloorBody = {
  type: FloorType;
  description: string;
};

export type AddNewFloorSubmit = (
  body: AddNewFloorBody,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddNewFloorModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

export type AddNewFloorModalProps = AddNewFloorModalContainerProps & {
  onSubmit: AddNewFloorSubmit;
};
