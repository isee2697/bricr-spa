export type SelectTemplateModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: () => Promise<undefined | { error: boolean }>;
  templates: EmailTemplateItem[];
};

export type EmailTemplateItem = {
  id: string;
  name: string;
};
