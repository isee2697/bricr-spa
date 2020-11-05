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
  MainContact = 'MainContact',
  Broker = 'Broker',
  FinancialAdvisor = 'FinancialAdvisor',
  Custom = 'Custom',
}
