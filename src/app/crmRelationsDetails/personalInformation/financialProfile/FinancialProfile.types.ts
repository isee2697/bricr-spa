import { PromiseFunction } from 'app/shared/types';

export type FinancialProfileProps = {
  onSave: PromiseFunction<void>;
};

export enum PeriodType {
  PerMonth = 'PerMonth',
  PerWeek = 'PerWeek',
  PerFourWeeks = 'PerFourWeeks',
  PerYear = 'PerYear',
}
