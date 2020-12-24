export type FinancialProfileProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export enum PeriodType {
  PerMonth = 'PerMonth',
  PerWeek = 'PerWeek',
  PerFourWeeks = 'PerFourWeeks',
  PerYear = 'PerYear',
}
