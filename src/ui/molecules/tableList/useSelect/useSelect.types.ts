export type SelectState = string[];

export type SelectAction = {
  type: string;
  key?: string;
  itemCount?: number;
};
