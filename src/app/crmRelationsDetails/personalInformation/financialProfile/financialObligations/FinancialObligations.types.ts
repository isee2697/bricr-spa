import { CrmFinancial, FinancialObligationType, UpdateCrmFinancialInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type FinancialObligationsProps = {
  data?: CrmFinancial;
  onSave: PromiseFunction<UpdateCrmFinancialInput>;
};

export type FinancialObligation = {
  type: FinancialObligationType;
  typeIndex: number;
  title: string;
  kindOfObligation: KindOfObligation;
  obligation: number;
  extraInformation: string;
};

export enum KindOfObligation {
  OverdraftFacilityOnPaymentAccount = 'OverdraftFacilityOnPaymentAccount',
  PersonalLoan = 'PersonalLoan',
  LeaseAgreement = 'LeaseAgreement',
  RevolvingCredit = 'RevolvingCredit',
  CurrentAccountCredit = 'CurrentAccountCredit',
  CreditAlreadyRepaid = 'CreditAlreadyRepaid',
  BusinessCredit = 'BusinessCredit',
  PrivateLoan = 'PrivateLoan',
  StudentDebt = 'StudentDebt',
  TaxPayables = 'TaxPayables',
  CreditCard = 'CreditCard',
  ResidualDebtForTheSaleOfAHouse = 'ResidualDebtForTheSaleOfAHouse',
  BkrRegistration = 'BkrRegistration',
  SignedRequestForCreditFacilityReduction = 'SignedRequestForCreditFacilityReduction',
  EvidenceForTheReduction = 'EvidenceForTheReduction',
  ShoppingCard = 'ShoppingCard',
  RentalPurchase = 'RentalPurchase',
  Alimony = 'Alimony',
  GroundLease = 'GroundLease',
  MortgageWithoutInterestDeduction = 'MortgageWithoutInterestDeduction',
}
