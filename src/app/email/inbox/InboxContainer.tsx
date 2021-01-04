import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { EmailFolderListItem, useListEmailFoldersLazyQuery } from 'api/types';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { EmailInbox } from './Inbox';
import { EmailInboxContainerProps } from './Inbox.types';

export const EmailInboxContainer = (props: EmailInboxContainerProps) => {
  const { inboxId } = useParams<{ inboxId: string }>();
  const { push } = useHistory();
  const { path } = props;

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

  useEffect(() => {
    if (data?.listEmailFolders && data.listEmailFolders.length > 0) {
      push(
        joinUrlParams(`${path}/inbox/:inboxId/:folderId`, { inboxId, folderId: data.listEmailFolders[0].folder.id }),
      );
    }
  }, [data, inboxId, path, push]);

  return <EmailInbox {...props} folders={(data?.listEmailFolders || []) as EmailFolderListItem[]} />;
};
