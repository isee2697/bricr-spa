import { ReactElement } from 'react';

import { ContractTemplate } from '../ContractTemplates.types';

export type ContractTemplatesRowProps = {
  item: ContractTemplate;
  checked: boolean;
  checkbox: ReactElement;
};
