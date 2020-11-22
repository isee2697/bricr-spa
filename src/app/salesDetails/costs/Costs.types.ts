export type CostsProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CostsContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CostItem = {
  id: string;
  title: string;
  costType?: CostType;
  vatTaxedCosts?: number;
  vatPercentage?: 21 | 9 | 0;
  vatConditions?: CostVatCondition;
  costCenter?: string;
  notes?: string;
};

export enum CostType {
  StartUp = 'StartUp',
  Marketing = 'Marketing',
  Withdrawal = 'Withdrawal',
}

export enum CostVatCondition {
  DoNotSettle = 'DoNotSettle',
}
