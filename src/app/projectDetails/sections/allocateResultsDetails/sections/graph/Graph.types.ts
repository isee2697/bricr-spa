export type CustomBarProps = {
  arg: number;
  val: number;
  startVal: number;
  barWidth: number;
  maxBarWidth: number;
  value: number;
  color: string;
  index: number;
  rotated?: boolean;
};

export type ChartDataItem = {
  [key: string]: string | number;
};
