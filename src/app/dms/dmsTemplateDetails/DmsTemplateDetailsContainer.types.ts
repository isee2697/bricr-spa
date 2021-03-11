export type DmsTemplateDetailsContainerProps = {
  showImages: boolean;
  onChangeShowImages: VoidFunction;
  showAttachments: boolean;
  onChangeShowAttachments: VoidFunction;
};

export enum DocumentType {
  Sale = 'Sale',
  Rent = 'Rent',
}
