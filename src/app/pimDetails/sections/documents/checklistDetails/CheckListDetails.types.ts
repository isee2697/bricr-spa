import { DocumentFile } from '../../summary/auditChecklist/documents/Documents.types';

export type CheckListDetailsProps = {
  file: DocumentFile;
  onClose: VoidFunction;
};
