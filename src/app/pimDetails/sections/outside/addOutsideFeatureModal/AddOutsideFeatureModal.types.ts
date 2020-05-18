import { OutsideFeatureType } from 'api/types';

type AddOutsideFeatureBody = {
  type: OutsideFeatureType;
  description: string;
};

export type AddOutsideFeatureSubmit = (
  body: AddOutsideFeatureBody,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddOutsideFeatureModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

export type AddOutsideFeatureModalProps = AddOutsideFeatureModalContainerProps & {
  onSubmit: AddOutsideFeatureSubmit;
};
