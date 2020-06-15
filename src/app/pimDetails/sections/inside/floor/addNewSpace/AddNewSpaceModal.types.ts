import { SpaceType } from 'api/types';

type AddNewSpaceBody = {
  type: SpaceType;
  name: string;
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
  onClose: (id?: string) => void;
  floorId: string;
};

export type AddNewSpaceModalProps = Omit<AddNewSpaceModalContainerProps, 'floorId'> & {
  onSubmit: AddNewSpaceSubmit;
};
