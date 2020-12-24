export type AnnualFiguresItem = {};

export enum AnnualFigureType {
  Type1 = 'Type1',
  Type2 = 'Type2',
  Type3 = 'Type3',
  Type4 = 'Type4',
}

export type AnnualFigure = {
  id: string;
  year: number;
  basicFigures: string;
  type: AnnualFigureType;
};
