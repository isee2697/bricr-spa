import { LabelInput, LastUpdatedProfile } from 'api/types';

export enum TemplateType {
  bricr = 'bricr',
  custom = 'custom',
}

export type ActiveTabStatus = 'active' | 'inactive';

export type WorkflowTemplatesProps = {
  templates: WorkflowItem[];
  dateUpdated: string | null | undefined;
  updatedBy: LastUpdatedProfile | null | undefined;
  onAdd: (input: Pick<LabelInput, 'text' | 'icon'>) => Promise<undefined | { error: boolean }>;
  templateType?: TemplateType;
};

export enum WorkflowBluePrints {
  NewOrderAcquisition = 'NewOrderAcquisition',
  SaleRentProperty = 'SaleRentProperty',
  PurchaseProperty = 'PurchaseProperty',
  ReletProcess = 'ReletProcess',
  NewConstructionProcess = 'NewConstructionProcess',
}

export interface WorkflowItem {
  id: string;
  name: string;
  avatar?: string;
  createdAt: string;
  status: ActiveTabStatus;
  workflowSections: number;
  startPoints: number;
  started: number;
  inProgress: number;
  completed: number;
  labels: string[];
}
