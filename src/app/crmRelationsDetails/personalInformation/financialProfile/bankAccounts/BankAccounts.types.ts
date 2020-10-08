export type BankAccountsProps = {};

export type BankAccount = {
  key: BankAccountType;
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
