import { DocumentContractType } from '../DocumentContract.types';

export type DocumentContractSidebarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  data: DocumentContractType;
  onChangeGroup: (group: DocumentContractGroup) => void;
  group: DocumentContractGroup;
  activeItem: number;
  onChangeActiveItem: (item: number) => void;
};

export enum DocumentContractGroup {
  Data = 'Data',
  Security = 'Security',
}
