import { NcpCosts, NcpCost } from 'api/types';
import { CostForm } from 'app/shared/prices/addCostModal/AddCostModal.types';

export type CostsProps = {
  data: NcpCosts;
  onAddCost: (values: CostForm) => Promise<undefined | { error: boolean }>;
  onDescriptionSave: (values: { description: string }) => Promise<undefined | { error: boolean }>;
  onUpdateCost: (values: NcpCost) => Promise<undefined | { error: boolean }>;
};
