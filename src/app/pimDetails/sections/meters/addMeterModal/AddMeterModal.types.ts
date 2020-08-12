import { MeterType } from 'api/types';

export type AddMeterModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onAddMeter: VoidFunction;
};

type AddMeterBody = {
  type: MeterType;
  name: string;
};

export type AddMeterSubmit = (
  body: AddMeterBody,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddMeterModalProps = Pick<AddMeterModalContainerProps, 'isOpened' | 'onClose'> & {
  onSubmit: AddMeterSubmit;
};
