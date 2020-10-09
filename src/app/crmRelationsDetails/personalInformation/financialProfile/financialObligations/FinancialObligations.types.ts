export type FinancialObligationsProps = {};

export type FinancialObligation = {
  key: FinancialObligationType;
  typeIndex: number;
  title: string;
  kindOfObligation: KindOfObligation;
  obligation: number;
  extraInformation: string;
};

export enum KindOfObligation {
  Kind1 = 'Kind1',
  Kind2 = 'Kind2',
  Kind3 = 'Kind3',
}

export enum FinancialObligationType {
  Obbl1 = 'Obbl1',
  Obbl2 = 'Obbl2',
  Obbl3 = 'Obbl3',
}
