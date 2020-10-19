export type LinkProfileModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};

export enum LinkProfileType {
  MainContact = 'MainContact',
  Broker = 'Broker',
  FinancialAdvisor = 'FinancialAdvisor',
  Custom = 'Custom',
}
