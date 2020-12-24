export type DocumentItem = {
  id: string;
  type: DocumentType;
  deliveryBy: DocumentDeliverer;
  missingDocument: number;
  condition: DocumentCondition;
};

export enum DocumentType {
  EnergyLabel = 'EnergyLabel',
  TitleDeed = 'TitleDeed',
  HomeText = 'HomeText',
  ServiceAssignment = 'ServiceAssignment',
  BalanceSheetProfitLossAccount = 'BalanceSheetProfitLossAccount',
  HouseRules = 'HouseRules',
  FinancialStatementsVve = 'FinancialStatementsVve',
  MinutesAlv = 'MinutesAlv',
  DeedOfDivision = 'DeedOfDivision',
  MultiYearMaintenancePlan = 'MultiYearMaintenancePlan',
  ANnualWaterStatement = 'AnnualWaterStatement',
  WozDecision = 'WozDecision',
  MunicipalCharges = 'MunicipalCharges',
  PiecesVve = 'PiecesVve',
  Drawings = 'Drawings',
  Plans = 'Plans',
  Notes = 'Notes',
  FinalInspectionForm = 'FinalInspectionForm',
  AnnualAccountsEnergy = 'AnnualAccountsEnergy',
  CadastralData = 'CadastralData',
  AdmissionForm = 'AdmissionForm',
  CertificateOfInheritance = 'CertificateOfInheritence',
  EmployerStatement = 'EmployerStatement',
}

export enum DocumentDeliverer {
  Owner = 'Owner',
  Broker = 'Broker',
}

export enum DocumentCondition {
  Mandatory = 'Mandatory',
  Optional = 'Optional',
  Extra = 'Extra',
}
