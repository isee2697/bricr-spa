export type AddNewChartBody = {
  chartType: ChartType;
};

export enum ChartType {
  CustomChart = 'CustomChart',
  BricrChart = 'BricrChart',
  NewChart = 'NewChart',
}
