import { Profile } from 'api/types';

export type IncomeInformationItem = {
  key: IncomeInformationType;
  employer?: {
    profession: string;
    user: Profile;
    employer: string;
    country: string;
    city: string;
    zipCode: string;
    street: string;
    houseNumber: string;
    addition: string;
    grossIncome: string;
    period: number;
    holidayBonuse: boolean;
    fixedThirteenthMonth: boolean;
    irregularityAllowance: number;
    irregularityAllowancePeriod: number;
    yearEndProfitDistribution: number;
    yearEndProfitDistributionPeriod: number;
    overtime: number;
    overtimePeriod: number;
    commission: number;
    commissionPeriod: number;
    extraInformation: string;
    typeOfEmployment: IncomeInformationTypeOfEmployment;
  };
};

export enum IncomeInformationTypeOfEmployment {
  FixedTermEmployment = 'FixedTermEmployment',
  SalariedEmploymentIndefinitely = 'SalariedEmploymentIndefinitely',
}

export enum IncomeInformationType {
  Employer = 'Employer',
  IncomeFromEquity = 'IncomeFromEquity',
  Pension = 'Pension',
  SocialBenefit = 'SocialBenefit',
  Entrepreneur = 'Entrepreneur',
}
