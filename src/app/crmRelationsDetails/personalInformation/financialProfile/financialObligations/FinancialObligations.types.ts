export type FinancialObligationsProps = {};

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

export enum FinancialObligationType {
  Obbl1 = 'Obbl1',
  Obbl2 = 'Obbl2',
  Obbl3 = 'Obbl3',
}
