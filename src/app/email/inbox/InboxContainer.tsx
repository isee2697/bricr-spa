import React from 'react';

import { useListEmailQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const { data } = useListEmailQuery({ variables: { folder: 'inbox' } });

  if (!data?.listEmail) {
    return <Loader />;
  }

  return <EmailInbox {...props} emails={data.listEmail} />;
};
