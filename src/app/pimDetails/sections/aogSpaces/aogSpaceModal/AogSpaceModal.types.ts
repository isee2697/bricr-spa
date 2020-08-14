import { AogSpaceType } from '../../../../../api/types';

export type AogSpaceModalContainerProps = {
  type: AogSpaceType;
  onClose: VoidFunction;
  isOpened: boolean;
};

export type AogSpaceModalProps = {
  isOpened: boolean;
  onSubmit: (data: { name: string }) => Promise<{ error: boolean } | undefined>;
  onClose: VoidFunction;
  type: AogSpaceType;
};
