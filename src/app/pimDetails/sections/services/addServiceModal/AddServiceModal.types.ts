import { ServiceRadioType } from '../Services.types';
import { AddServiceInput, ServiceType } from 'api/types';

export type AddServiceModalContainerProps = {
  onAddService: VoidFunction;
  isOpened: boolean;
  type: ServiceType;
  types: ServiceRadioType[];
  onClose: (id?: string) => void;
};

export type AddServiceSubmit = (
  body: AddServiceInput,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddServiceModalProps = {
  isOpened: boolean;
  onSubmit: AddServiceSubmit;
  onClose: VoidFunction;
  types: ServiceRadioType[];
  title: string;
  nameLabel: string;
};
