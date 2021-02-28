import { CrmFinancial, UpdateCrmFinancialInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type FinancialProfileProps = {
  data?: CrmFinancial;
  onSave: PromiseFunction<UpdateCrmFinancialInput>;
};

export enum PeriodType {
  PerMonth = 'PerMonth',
  PerWeek = 'PerWeek',
  PerFourWeeks = 'PerFourWeeks',
  PerYear = 'PerYear',
}
