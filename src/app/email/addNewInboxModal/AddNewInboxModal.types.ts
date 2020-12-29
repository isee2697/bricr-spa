import { PromiseFunction } from 'app/shared/types';

export type AddNewInboxModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddNewInboxBody>;
};

export type AddNewInboxBody = {
  name: string;
  mainEmailAddress: string;
  settings1: string;
  settings2: string;
  settings3: string;
  settings4: string;
};
