import { NcpCosts, NcpCost } from 'api/types';

export type CostsProps = {
  data: NcpCosts;
  onDescriptionSave: (values: { description: string }) => Promise<undefined | { error: boolean }>;
  onUpdateCost: (values: NcpCost) => Promise<undefined | { error: boolean }>;
};
