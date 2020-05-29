import { ServiceTypes, ServiceRadioType } from '../Services.types';

export type AddServiceModalContainerProps = {
  isOpened: boolean;
  type: ServiceTypes;
  types: ServiceRadioType[];
  onClose: VoidFunction;
};

type AddOutsideFeatureBody = {
  type: ServiceTypes;
  description: string;
};

export type AddServiceSubmit = (
  body: AddOutsideFeatureBody,
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
