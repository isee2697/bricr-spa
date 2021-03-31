import { Questionaire, UpdateQuestionaireInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';

export type ActiveTabStatus = 'active' | 'inactive';

export interface DmsTemplateMeta {
  generated: number;
  sent: number;
  printed: number;
  download: number;
  declined: number;
  completed: number;
}

export interface DmsTemplateItem {
  id: string;
  type: string;
  name: string;
  avatar?: string;
  createdAt: string;
  status: ActiveTabStatus;
  labels: string[];
  meta: DmsTemplateMeta;
  file?: string;
}

export type DmsTemplatesProps = {
  templates: Questionaire[];
  onAdd: PromiseFunction<{ name: string }>;
  onUpdate: PromiseFunction<UpdateQuestionaireInput>;
  category: string;
  loading: boolean;
  pagination: PaginationProps;
  amount: DmsTemplatesAmount;
};

export type DmsTemplatesAmount = {
  active: number;
  inactive: number;
};
