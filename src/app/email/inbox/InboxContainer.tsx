import React from 'react';

import { EMAILS } from 'api/mocks/email';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  return <EmailInbox {...props} emails={EMAILS} />;
};
