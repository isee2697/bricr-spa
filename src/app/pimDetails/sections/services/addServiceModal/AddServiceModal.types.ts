import { ServiceTypes } from '../Services.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type AddServiceModalContainerProps = {
  isOpened: boolean;
  type: ServiceTypes;
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
  types: RadioDataType[];
  title: string;
  nameLabel: string;
};
