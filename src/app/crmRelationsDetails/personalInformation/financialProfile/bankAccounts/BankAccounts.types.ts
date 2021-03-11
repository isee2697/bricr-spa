import { CrmFinancial, UpdateCrmFinancialInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type BankAccountsProps = {
  data?: CrmFinancial;
  onSave: PromiseFunction<UpdateCrmFinancialInput>;
};

export type BankAccount = {
  type: BankAccountType;
  typeIndex: number;
  title: string;
  accountNumber: string;
  bic: string;
  iban: string;
  swift: string;
  purpose: BankAccountPurpose;
};

export enum BankAccountType {
  Ing = 'Ing',
  Rabobank = 'Rabobank',
  AbnAmro = 'AbnAmro',
}

export enum BankAccountPurpose {
  AutomaticIncasso = 'AutomaticIncasso',
  ServiceCosts = 'ServiceCosts',
  FirstInvoice = 'FirstInvoice',
}
