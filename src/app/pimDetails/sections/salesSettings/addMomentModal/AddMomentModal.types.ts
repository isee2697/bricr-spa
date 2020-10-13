import { AnyObject } from 'react-final-form';
// import { ServiceRadioType } from 'app/shared/services/Service.types';
// import { AddServiceInput, ServiceType } from 'api/types';

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
  type: AnyObject;
  onClose: (id?: string) => void;
  currentModalIndex: number;
};

export type AddMomentSubmit = (
  body: AnyObject,
) => Promise<
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
  onSubmit: VoidFunction;
  onClose: VoidFunction;
  persons: LinkedPersonType[];
  title: string;
  nameLabel: string;
};
