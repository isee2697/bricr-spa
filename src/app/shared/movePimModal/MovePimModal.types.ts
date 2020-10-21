import { AnyObject } from 'react-final-form';

import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export type SelectStepProps = {
  onNext: () => void;
  onPrev: () => void;
  options?: ModalStateOptions;
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
};
