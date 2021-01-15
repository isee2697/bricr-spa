import { DocumentContractType } from '../DocumentContract.types';

export type DocumentContractSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data: DocumentContractType;
  onChangeGroup: (group: DocumentContractGroup) => void;
  group: DocumentContractGroup;
};

export enum DocumentContractGroup {
  Data = 'Data',
  Security = 'Security',
}
