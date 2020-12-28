import { PromiseFunction } from 'app/shared/types';
import { LivingSituationType } from '../baseChecklist/BaseChecklist.types';

export type AddLivingSituationTypeModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<LivingSituationTypeSubmitBody>;
};

export type LivingSituationTypeSubmitBody = {
  name: string;
  type: LivingSituationType;
};
