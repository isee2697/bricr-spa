import { AnyObject } from 'react-final-form';

import { ListPimsQuery, Pim as PimEntity } from 'api/types';
import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export type SelectStepProps = {
  onNext: () => void;
  onPrev: () => void;
  options?: ModalStateOptions;
  objects?: { [key: string]: PimEntity[] };
};

export type MovePimSubmit<T = AnyObject> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;

export type MovePimModalProps = {
  onSubmit: MovePimSubmit;
  isOpen: boolean;
  // propertyCategory?: string;
  options?: ModalStateOptions;
  data?: { [key: string]: ListPimsQuery };
};
