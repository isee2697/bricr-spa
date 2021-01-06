import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EmailFolderListItem, useListEmailFoldersLazyQuery } from 'api/types';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const { inboxId } = useParams<{ inboxId: string }>();

  const [listNylasEmailFolders, { data }] = useListEmailFoldersLazyQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    const getNylasEmailFolders = () => {
      if (inboxId) {
        listNylasEmailFolders({
          variables: {
            accountId: inboxId,
          },
        });
      }
    };

    getNylasEmailFolders();
  }, [listNylasEmailFolders, inboxId]);

  return <EmailInbox {...props} folders={(data?.listEmailFolders || []) as EmailFolderListItem[]} />;
};
