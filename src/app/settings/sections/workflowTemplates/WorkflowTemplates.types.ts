import { ReactNode } from 'react';

import { LabelInput, LastUpdatedProfile, WorkflowTemplate, WorkflowTemplateStatus } from 'api/types';

import { TemplateType } from './WorkflowTemplatesContainer.types';

export type ActiveTabStatus = 'active' | 'inactive';

export interface WorkflowItem {
  id: string;
  name: string;
  avatar?: string;
  createdAt: string;
  type: TemplateType;
  status: ActiveTabStatus;
  workflowSections: number;
  startPoints: number;
  started: number;
  inProgress: number;
  completed: number;
  labels: string[];
  icon?: ReactNode;
}

export type WorkflowTemplatesProps = {
  templates?: GetWorkflowTemplateListData;
  dateUpdated: string | null | undefined;
  updatedBy: LastUpdatedProfile | null | undefined;
  onAdd: (input: Pick<LabelInput, 'text' | 'icon'>) => Promise<undefined | { error: boolean }>;
  onUpdate: (template: WorkflowItem) => void;
  templateType?: TemplateType;
  status: WorkflowTemplateStatus;
  onStatusChange: (status: WorkflowTemplateStatus) => void;
};

export interface GetWorkflowTemplateListData extends PaginatedMeta {
  workflowTemplates: WorkflowTemplate[];
}

export interface PaginatedMeta {
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}
