import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { DocumentsProps } from './Documents.types';
import { DocumentFolders } from './documentFolders/DocumentFolders';
import { ChecklistContainer } from './checklist/ChecklistContainer';
import { ChecklistListContainer } from './checklistList/ChecklistListContainer';
import { CheckListItemDetailsContainer } from './checkListItemDetails/CheckListItemDetailsContainer';

export const Documents = (props: DocumentsProps) => {
  const { path, documents, onAddFolder, onDeleteFolder, onUpdateFolder, onUploadFiles } = props;

  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  if (!documents) {
    return <Loader />;
  }

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.documents.title' })}
        to="/documents"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Switch>
        <Route
          path={`${path}/folders`}
          render={() => (
            <DocumentFolders
              {...props}
              path={`${path}/folders`}
              foldersData={documents}
              isLoading={false}
              isError={false}
              onAddFolder={onAddFolder}
              onDeleteFolder={onDeleteFolder}
              onUpdateFolder={onUpdateFolder}
              onUploadFiles={onUploadFiles}
            />
          )}
        />
        <Route
          exact
          path={`${path}/checklist`}
          render={() => <ChecklistContainer {...props} path={`${path}/checklist`} />}
        />
        <Route
          exact
          path={`${path}/checklist/:checklistId`}
          render={() => <ChecklistListContainer {...props} path={`${path}/checklist`} />}
        />
        <Route
          path={`${path}/checklist/:checklistId/:checklistItemId`}
          render={() => <CheckListItemDetailsContainer {...props} path={`${path}/checklist`} />}
        />
        <Redirect to={`${path}/folders`} />
      </Switch>
    </>
  );
};
