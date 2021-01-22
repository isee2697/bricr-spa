import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { DocumentsGeneralContainer } from './general/GeneralContainer';
import { DocumentsCheckListContainer } from './checklist/CheckListContainer';

export const Documents = (props: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'pim_details.documents.title' })} urlBase={baseUrl} to="/documents" />
      <Switch>
        <Route path={`${baseUrl}/documents/folders`} exact render={() => <DocumentsGeneralContainer {...props} />} />
        <Route path={`${baseUrl}/documents/checklist`} render={() => <DocumentsCheckListContainer {...props} />} />
        <Redirect to={`${baseUrl}/documents/folders`} />
      </Switch>
    </>
  );
};
