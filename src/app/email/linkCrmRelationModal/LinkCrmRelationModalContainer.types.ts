import { CrmGeneral } from 'api/types';

export type LinkCrmRelationModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (crm: CrmGeneral) => Promise<void>;
};
