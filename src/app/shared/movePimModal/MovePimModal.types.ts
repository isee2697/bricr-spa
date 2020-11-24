import { AnyObject } from 'react-final-form';

import { ListPimsQuery, MovePimDataQuery, Pim as PimEntity } from 'api/types';
import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export type ObjectType = {
  [key: string]: PimEntity[];
};

export type Objects = {
  [key: string]: { items: PimEntity[] };
};

export type SelectStepProps = {
  onNext: () => void;
  onPrev: () => void;
  onClose?: () => void;
  onUpdate: (data: ObjectType) => void;
  options?: ModalStateOptions;
  objects?: ObjectType;
  results?: ObjectType;
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
  options?: ModalStateOptions;
  data?: MovePimDataQuery;
};
