import { ReactNode } from 'react';

import { ContractTemplate } from '../contractTemplates/ContractTemplates.types';
import { PromiseFunction } from 'app/shared/types';

import { AddArticleGroupBody } from './addArticleGroupModal/AddArticleGroupModal.types';

export type ContractTemplatesDetailsProps = {
  generalInfo: ContractTemplate;
  goBack: VoidFunction;
  onAddArticleGroup: PromiseFunction<AddArticleGroupBody>;
};

export type ArticleGroup = {
  id: string;
  name: string;
};

export type Field = {
  id: string;
  value: string;
  icon: ReactNode;
};
