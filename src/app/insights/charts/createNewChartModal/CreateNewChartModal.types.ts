export type CreateNewChartModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (payload: CreateNewChartBody) => Promise<boolean>;
};

export type CreateNewChartBody = {
  type: ChartType;
  title: string;
};

export enum ChartType {
  SingleObject = 'SingleObject',
  CrossObject = 'CrossObject',
  Funnels = 'Funnels',
  Attribution = 'Attribution',
}
