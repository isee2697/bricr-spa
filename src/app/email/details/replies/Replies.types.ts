import { ThreadMessage } from 'api/types';
import { Email } from '../../Email.types';

export type RepliesProps = {
  email: Email;
  replies: ThreadMessage[];
};
