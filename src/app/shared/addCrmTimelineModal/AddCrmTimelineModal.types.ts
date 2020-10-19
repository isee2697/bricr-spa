export type AddCrmTimelineModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
};

export enum CrmTimelineType {
  Sap = 'Sap',
  WoningNet = 'WoningNet',
  DebtorNumber = 'DebtorNumber',
  Custom = 'Custom',
}
