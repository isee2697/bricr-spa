import React from 'react';
import { useParams } from 'react-router-dom';

import { useListEmailQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const { folder } = useParams<{ folder: string }>();

  const { data } = useListEmailQuery({ variables: { folder } });

  if (!data?.listEmail) {
    return <Loader />;
  }

  return <EmailInbox {...props} emails={data.listEmail} />;
};
