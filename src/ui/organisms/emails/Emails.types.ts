import { EmailProps } from 'ui/molecules/email/Email.types';

export type EmailsProps = {
  data: EmailProps;
  onAddClick: () => void;
  onMoreClick: () => void;
  onEmailClick: (id: string) => void;
  count: number;
};
