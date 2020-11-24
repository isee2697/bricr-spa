import { Email } from 'api/types';
import { EmailReply } from '../../Email.types';

export type RepliesProps = {
  email: Email;
  replies: EmailReply[];
};
