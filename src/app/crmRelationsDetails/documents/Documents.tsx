import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { SecondaryFolderContainer } from 'app/shared/dms/secondaryFolder/SecondaryFolderContainer';
import { DmsEntityType } from 'api/types';

import { DocumentsProps } from './Documents.types';
import { ChecklistContainer } from './checklist/ChecklistContainer';
import { ChecklistListContainer } from './checklistList/ChecklistListContainer';
import { CheckListItemDetailsContainer } from './checkListItemDetails/CheckListItemDetailsContainer';

export const Documents = (props: DocumentsProps) => {
  const { title, path } = props;

  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams<{ id: string }>();

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
            <SecondaryFolderContainer
              id={urlParams.id as string}
              entityType={DmsEntityType.Crm}
              name={title}
              type={'relations'}
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
