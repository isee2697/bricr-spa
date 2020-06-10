import { MeterType } from 'api/types';

export type AddMeterModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

type AddOutsideFeatureBody = {
  type: MeterType;
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
