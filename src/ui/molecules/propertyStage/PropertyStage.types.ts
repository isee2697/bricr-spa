export type PropertyStageItem = {
  title: string;
  date?: string;
};

export type PropertyStageProps = {
  items: PropertyStageItem[];
  activeItem: number;
};
