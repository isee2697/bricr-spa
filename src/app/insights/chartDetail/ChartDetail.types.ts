import { DatasourceCanvasGroups, DatasourceCanvasType } from './chartData/datasourceCanvas/DatasourceCanvas.types';

export enum ChartDashboardType {
  Invoices = 'Invoices',
  PIM = 'PIM',
  CRM = 'CRM',
  Sales = 'Sales',
}

export enum ChartType {
  Bar = 'Bar',
  Column = 'Column',
  Line = 'Line',
  Area = 'Area',
  Pie = 'Pie',
  Donut = 'Donut',
  Summary = 'Summary',
  Table = 'Table',
}

export enum ChartComparisonType {
  NoComparison = 'NoComparison',
}

export enum ChartSortbyType {
  None = 'None',
}

export type ChartDataType = {
  id: string;
  name: string;
  chartType?: ChartType;
  primaryColor?: string;
  secondaryColor?: string;
  showTotalRow?: boolean;
  hideDataLabels?: boolean;
  comparison?: ChartComparisonType;
  sortBy?: ChartSortbyType;
  displayValuesAmount?: number;
  sources?: DatasourceCanvasGroups;
};

export type ChartDetailProps = {
  path: string;
  data: ChartDataType;
  onUpdate: (newData: ChartDataType) => Promise<{ error: boolean }>;
  onAddSource: (type: string, targetSourceGroup: DatasourceCanvasType) => void;
  onRemoveSource: (sourceId: string) => void;
};

export type VisualisationProps = {
  data: ChartDataType;
  onUpdate: (newData: ChartDataType) => Promise<{ error: boolean }>;
};

export type ChartDataProps = {
  data: ChartDataType;
  onAddSource: (type: string, targetSourceGroup: DatasourceCanvasType) => void;
  onRemoveSource: (sourceId: string) => void;
};

export type PreviewProps = {
  data: ChartDataType;
};
