export enum AllocateType {
  StartFromAdmin = 'StartFromAdmin',
  StartForThis = 'StartForThis',
  StartWithBlank = 'StartWithBlank',
}

export type AllocateTypeModalProps = {
  onClose: VoidFunction;
  onSelect: (type: AllocateType) => void;
  isOpen: boolean;
};
