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
  pension?: {
    grossAowBenefit: number;
    grossAowBenefitPeriod: number;
    grossPreRetirementBenefit: number;
    grossPreRetirementBenefitPeriod: number;
    extraInformation: string;
  };
  socialBenefit?: {
    grossIncome: number;
    period: number;
    extraInformation: number;
    typeOfSocialBenefit: TypeOfSocialBenefit;
  };
  incomeEquity?: {
    income: number;
    extraInformation: string;
  };
  entrepeneur?: {
    typeOfEntrepeneur: TypeOfEntrepeneur;
    companyCar: boolean;
    companyBicycle: boolean;
    passedPensionedAge: boolean;
    rightToAnSmeProfitExemption: boolean;
    incomeFromBusinessPerYear: number;
    workingHoursPerMonth: number;
    yearsAsIndependent: number;
    extraInformation: string;
  };
};

export type EmployerProps = {
  isEditing: boolean;
};

export enum TypeOfSocialBenefit {
  SocialBenefit = 'SocialBenefit',
  Wajong = 'Wajong',
  WiaWao = 'WiaWao',
  IoawIow = 'IoawIow',
}

export enum TypeOfEntrepeneur {
  IbEntrepeneur = 'IbEntrepeneur',
  Dga = 'Dga',
}

export enum CompanyTraffic {
  CompanyCar = 'CompanyCar',
  CompanyBicycle = 'CompanyBicycle',
}

export enum EntrepreneurOption {
  PassedPensionedAge = 'PassedPensionedAge',
  RightToSmeProfitExemption = 'RightToSmeProfitExemption',
}

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
