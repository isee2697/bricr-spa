import React from 'react';
import { useParams, Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Button, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AddIcon } from 'ui/atoms/icons';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { DocumentsProps } from './Documents.types';
import { DocumentsListContainer } from './list/ListContainer';

export const Documents = ({ path, onSidebarOpen, isSidebarVisible }: DocumentsProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();

  const handleAddNew = () => {
    push(`${joinUrlParams(baseUrl, urlParams)}/documents/new`);
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.documents.title' })}
        to="/documents"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={handleAddNew}
          >
            {formatMessage({ id: 'crm.details.request_document' })}
          </Button>
        }
      />
      <Switch>
        <Route exact path={path} component={() => <DocumentsListContainer />} />
        <Route exact path={`${path}/new`} component={() => <></>} />
        <Redirect to={{ pathname: `${path}` }} />
      </Switch>
    </>
  );
};
