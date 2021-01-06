import { EmailProps } from 'ui/molecules/email/Email.types';

export type EmailItem = Omit<EmailProps, 'onClick'>;

export type EmailsProps = {
  data: EmailItem[];
  onAddClick: () => void;
  onMoreClick: () => void;
  onEmailClick: (id: string) => void;
  count: number;
  loading?: boolean;
};
