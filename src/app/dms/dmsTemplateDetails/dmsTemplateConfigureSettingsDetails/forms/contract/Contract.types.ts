import { DmsTemplateItem } from '../../../../dmsTemplates/DmsTemplates.types';

export type ContractStepCheckType = {
  [key: string]: boolean;
};

export type ContractContainerProps = {
  template: DmsTemplateItem;
};

export type ContractProps = {
  template: DmsTemplateItem;
};
