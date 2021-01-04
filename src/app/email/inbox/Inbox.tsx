import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { InboxFolderContainer } from '../inboxFolder/InboxFolderContainer';
import { EmailDetailsContainer } from '../details/DetailsContainer';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { EmailInboxProps } from './Inbox.types';

export const EmailInbox = ({
  onSidebarOpen,
  onSidebarClose,
  isSidebarVisible,
  accounts,
  folders,
  path,
}: EmailInboxProps) => {
  const { inboxId } = useParams<{ inboxId: string }>();

  return (
    <Switch>
      <Route
        exact
        path={`${path}/inbox/:inboxId/:folderId`}
        render={() => (
          <InboxFolderContainer
            onSidebarOpen={onSidebarOpen}
            onSidebarClose={onSidebarClose}
            isSidebarVisible={isSidebarVisible}
            accounts={accounts}
            folders={folders}
          />
        )}
      />
      <Route
        path={`${path}/inbox/:inboxId/:folderId/:emailId`}
        render={() => <EmailDetailsContainer folders={folders} />}
      />
      <Redirect
        to={
          folders.length > 0
            ? joinUrlParams(`${path}/inbox/:inboxId/:folderId`, {
                inboxId,
                folderId: folders[0].folder.id,
              })
            : joinUrlParams(`${path}/inbox/:inboxId`, { inboxId })
        }
      />
    </Switch>
  );
};
