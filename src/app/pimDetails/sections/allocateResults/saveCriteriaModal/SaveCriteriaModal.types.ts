import { PromiseResponse } from 'app/shared/types';

export type SaveCriteriaFormType = {
  name: string;
};

export type SaveCriteriaModalProps = {
  onClose: VoidFunction;
  onGotoResult: VoidFunction;
  onSaveCriteria: (result: SaveCriteriaFormType) => PromiseResponse;
  isOpen: boolean;
};
