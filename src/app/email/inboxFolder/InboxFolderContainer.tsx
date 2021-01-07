import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { EmailFolderListItem, EmailListItem, useListEmailLazyQuery } from 'api/types';

import { InboxFolder } from './InboxFolder';
import { InboxFolderContainerProps } from './InboxFolder.types';

export const InboxFolderContainer = (props: InboxFolderContainerProps) => {
  const { inboxId, folderId } = useParams<{ inboxId: string; folderId: string }>();
  const { folders } = props;
  const [currentFolder, setCurrentFolder] = useState<EmailFolderListItem>();

  const [listEmails, { data }] = useListEmailLazyQuery({ fetchPolicy: 'no-cache' });

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

  useEffect(() => {
    const selectedFolder = folders.find(folder => folder.folder.nylasFolderId === folderId);

    if (selectedFolder) {
      setCurrentFolder(selectedFolder);
    }
  }, [folderId, folders, folders.length]);

  return <InboxFolder {...props} emails={(data?.listEmail || []) as EmailListItem[]} currentFolder={currentFolder} />;
};
