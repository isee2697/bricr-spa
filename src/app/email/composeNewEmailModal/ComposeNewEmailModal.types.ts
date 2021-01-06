import { EmailAndName } from 'api/types';
import { MultiSearch as MultiSearchType } from 'ui/molecules/multiSearch/MultiSearch.types';

export type ComposeNewEmailModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit(payload: ComposeNewEmailBody): Promise<boolean>;
  contacts: EmailAndName[];
  onAddNewEmail(email: string): void;
};

export type ComposeNewEmailBody = {
  from: string;
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
};

export type EmailAndNameMultiSearchType = MultiSearchType & EmailAndName;
