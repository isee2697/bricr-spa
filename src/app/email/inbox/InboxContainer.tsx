import React, { useState } from 'react';

import { Email } from '../Email.types';
import { EMAILS } from 'api/mocks/email';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const [emails, setEmails] = useState<Email[]>(EMAILS);

  return <EmailInbox {...props} emails={emails} onAddNewEmail={() => setEmails(EMAILS)} />;
};
