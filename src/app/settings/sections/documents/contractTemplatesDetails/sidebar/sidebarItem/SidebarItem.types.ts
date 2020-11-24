import { Field } from '../../ContractTemplatesDetails.types';

export type ContractTemplatesDetailsSidebarItemProps = {
  item: Field;
  searchValue: string;
};

export type ContractTemplatesDetailsSidebarItemDragObject = Field & {
  type: string;
};
