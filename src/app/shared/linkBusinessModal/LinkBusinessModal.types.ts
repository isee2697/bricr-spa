export type BusinessListItem = {
  id: string;
  name: string;
};

export type LinkBusinessModalContainerProps = {
  onSubmit: (businessId: string | null, type: LinkBusinessType) => Promise<undefined | { error: boolean }>;
};

export type LinkBusinessModalForm = {
  businesses?: string[];
  type: LinkBusinessType;
};

export type LinkBusinessModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: LinkBusinessModalForm) => Promise<undefined | { error: boolean }>;
  businessList: BusinessListItem[];
};

export enum LinkBusinessType {
  AccountManager = 'AccountManager',
  Manager = 'Manager',
  Accountant = 'Accountant',
  DeputyDirector = 'DeputyDirector',
  AdministrativeAssistant = 'AdministrativeAssistant',
  Counselor = 'Counselor',
  Ceo = 'Ceo',
  AssetManager = 'AssetManager',
  CalamitiesContactPerson = 'CalamitiesContactPerson',
  Consultant = 'Consultant',
  Contact = 'Contact',
  Controller = 'Controller',
  StockHoldersHeadLeader = 'StockHoldersHeadLeader',
  FacilityManager = 'FacilityManager',
  FinanceDirector = 'FinanceDirector',
  MortgageAdvisor = 'MortgageAdvisor',
  EstateAgent = 'EstateAgent',
  OfficeManager = 'OfficeManager',
  ProjectManager = 'ProjectManager',
  Secretary = 'Secretary',
  PropertyManager = 'PropertyManager',
}
