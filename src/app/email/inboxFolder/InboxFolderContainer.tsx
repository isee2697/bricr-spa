import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EmailListItem, useListEmailLazyQuery } from 'api/types';

import { InboxFolder } from './InboxFolder';
import { InboxFolderContainerProps } from './InboxFolder.types';

export const InboxFolderContainer = (props: InboxFolderContainerProps) => {
  const { inboxId, folderId } = useParams<{ inboxId: string; folderId: string }>();
  const { folders } = props;

  const [listEmails, { data, loading: loadingEmails }] = useListEmailLazyQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    const getEmails = async () => {
      listEmails({
        variables: {
          accountId: inboxId,
          folderId,
        },
      });
    };

    getEmails();
  }, [folderId, inboxId, listEmails]);

  const currentFolder = folders.find(folder => folder.folder.id === folderId);

  return (
    <InboxFolder
      {...props}
      emails={(data?.listEmail || []) as EmailListItem[]}
      loading={loadingEmails || !currentFolder}
      currentFolder={currentFolder}
    />
  );
};
