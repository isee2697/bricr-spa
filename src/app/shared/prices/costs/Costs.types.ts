import { CommonCosts, CommonCost } from 'api/types';

export type CostsProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  data: CommonCosts;
  onDescriptionSave: (values: { description: string }) => Promise<undefined | { error: boolean }>;
  onUpdateCost: (values: CommonCost) => Promise<undefined | { error: boolean }>;
};
