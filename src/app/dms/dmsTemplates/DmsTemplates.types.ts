import { PromiseFunction } from 'app/shared/types';

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
  name: string;
  avatar?: string;
  createdAt: string;
  status: ActiveTabStatus;
  labels: string[];
  meta: DmsTemplateMeta;
  file?: string;
}

export type DmsTemplatesProps = {
  templates: DmsTemplateItem[];
  onAdd: PromiseFunction<{ name: string }>;
  onUpdate: (template: DmsTemplateItem) => void;
};
