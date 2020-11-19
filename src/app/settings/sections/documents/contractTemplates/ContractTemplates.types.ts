import { DateTime } from 'luxon';

import { PromiseFunction } from 'app/shared/types';

import { AddContractTemplateBody } from './addContractTemplateModal/AddContractTemplateModal.types';

export type ContractTemplatesProps = {
  contractTemplates: ContractTemplate[];
  onAddContractTemplate: PromiseFunction<AddContractTemplateBody>;
};

export type ContractTemplate = {
  id: string;
  name: string;
  version: number;
  dateVersion: DateTime;
  note?: string;
  status?: 'active' | 'inactive';
};
