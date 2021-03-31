import { PromiseFunction } from 'app/shared/types';
import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export type InviteForSurveyModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddSurveyBody>;
  options?: ModalStateOptions;
};

export type InviteForSurveyStepProps = {
  onNext: () => void;
  onPrev: () => void;
  options?: ModalStateOptions;
};

export type AddSurveyBody = {};
