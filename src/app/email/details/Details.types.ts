import { EmailFolderListItem } from 'api/types';
import { Email } from '../Email.types';

export type EmailDetailsProps = {
  email: Email;
  folders: EmailFolderListItem[];
};

export type EmailDetailsContainerProps = {
  folders: EmailFolderListItem[];
};

export type EmailSectionsProps = {
  email: Email;
};
