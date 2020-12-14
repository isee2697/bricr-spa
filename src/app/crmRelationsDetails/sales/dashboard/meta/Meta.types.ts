export type MetaProps = {
  item: MetaItem;
};

export type MetaItem = {
  label: string;
  count: number;
  percentage: number;
  status: 'success' | 'warning' | 'error';
};
