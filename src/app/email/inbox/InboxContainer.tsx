import React from 'react';
import { useParams } from 'react-router-dom';

import { EmailFolderListItem, useListEmailFoldersQuery } from 'api/types';
import { useAuthState } from 'hooks';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const { inboxId } = useParams<{ inboxId: string }>();

  const { user } = useAuthState();
  const { data } = useListEmailFoldersQuery({
    fetchPolicy: 'no-cache',
    skip: !user || !inboxId,
    variables: {
      accountId: inboxId,
    },
  });

  return <EmailInbox {...props} folders={(data?.listEmailFolders || []) as EmailFolderListItem[]} />;
};
