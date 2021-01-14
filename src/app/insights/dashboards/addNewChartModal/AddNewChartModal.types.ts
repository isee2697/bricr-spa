import { Layout } from 'react-grid-layout';

export type AddNewChartModalProps = {
  onAddNewChart: (value: Layout) => void;
};

export type AddNewChartBody = {
  chartType: ChartType;
};

export enum ChartType {
  CustomChart = 'CustomChart',
  BricrChart = 'BricrChart',
  NewChart = 'NewChart',
}
