import { PromiseFunction } from 'app/shared/types';
import { DocumentType } from '../checklist/Checklist.types';

export type AddDocumentTypeModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<LivingSituationDocumentTypeSubmitBody>;
};

export type AddDocumentTypeModalContainerProps = {
  onClose: VoidFunction;
  onSubmit: PromiseFunction<LivingSituationDocumentTypeSubmitBody>;
};

export type LivingSituationDocumentTypeSubmitBody = {
  type: DocumentType;
};
