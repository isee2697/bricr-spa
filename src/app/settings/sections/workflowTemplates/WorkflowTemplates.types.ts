import { LabelInput, LastUpdatedProfile } from 'api/types';

export type WorkflowTemplatesProps = {
  dateUpdated: string | null | undefined;
  updatedBy: LastUpdatedProfile | null | undefined;
  onAdd: (input: Pick<LabelInput, 'text' | 'icon'>) => Promise<undefined | { error: boolean }>;
};

export enum WorkflowBluePrints {
  NewOrderAcquisition = 'NewOrderAcquisition',
  SaleRentProperty = 'SaleRentProperty',
  PurchaseProperty = 'PurchaseProperty',
  ReletProcess = 'ReletProcess',
  NewConstructionProcess = 'NewConstructionProcess',
}
