import { CommonCosts, CommonCost, Maybe } from 'api/types';

export type CostsProps = {
  data?: Maybe<CommonCosts>;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  onDescriptionSave: (values: { description: string }) => Promise<undefined | { error: boolean }>;
  onUpdateCost: (values: CommonCost) => Promise<undefined | { error: boolean }>;
};
