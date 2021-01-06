export type SelectSignatureModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: () => Promise<undefined | { error: boolean }>;
  signatures: SignatureItem[];
};

export type SignatureItem = {
  id: string;
  name: string;
  url: string;
};
