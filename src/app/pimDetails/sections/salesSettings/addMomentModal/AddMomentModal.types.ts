import { ReactNode } from 'react';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type MomentArrayType = {
  id: number;
  name: string;
  persons: LinkedPersonType[];
};

export type LinkedPersonType = {
  name: string;
  avatar: string;
  office: string;
  company: string;
  phone: string;
  email: string;
};

export type AddModalSubmit = (
  index: number,
  persons: LinkedPersonType[],
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddMomentModalContainerProps = {
  onAddMoment: AddModalSubmit;
  isOpened: boolean;
  type: string;
  onClose: (id?: string) => void;
  currentModalIndex: number;
};

export type AddMomentSubmit = () => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type MomentFormProps = {
  moment: MomentArrayType;
  onSave: AddMomentSubmit;
  index: number;
  isEditing: boolean;
  onAddMoment: VoidFunction;
};

export type AddMomentModalProps = {
  isOpened: boolean;
  onSubmit: AddMomentSubmit;
  onClose: VoidFunction;
  persons: CheckboxDataType[];
  title: string;
  nameLabel: string;
};
