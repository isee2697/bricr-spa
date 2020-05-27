import { Meters } from 'api/types';

export type AddMeterModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

type AddOutsideFeatureBody = {
  type: Meters;
  description: string;
};

export type AddMeterSubmit = (
  body: AddOutsideFeatureBody,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddMeterModalProps = AddMeterModalContainerProps & {
  onSubmit: AddMeterSubmit;
};
