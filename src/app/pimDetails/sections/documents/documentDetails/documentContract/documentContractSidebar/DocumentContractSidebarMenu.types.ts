import { DocumentContractType } from '../DocumentContract.types';

export type DocumentContractSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data: DocumentContractType;
};
