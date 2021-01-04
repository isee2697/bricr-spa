export type ComposeNewEmailModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit(payload: ComposeNewEmailBody): Promise<boolean>;
};

export type ComposeNewEmailBody = {
  from: string;
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
};
