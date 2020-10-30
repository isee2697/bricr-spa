export type PropertyStageItem = {
  title: string;
  date?: string;
  text?: JSX.Element[];
};

export type PropertyStageProps = {
  items: PropertyStageItem[];
  activeItem: number;
  baseSize?: number;
  height?: number | string;
};
