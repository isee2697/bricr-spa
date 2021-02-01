import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { DocumentKind } from '../general/General.types';

import { DocumentListOfCaseContainer } from './documentListOfCase/DocumentListOfCaseContainer';
import { DocumentQuestionnaireContainer } from './documentQuestionnaire/DocumentQuestionnaireContainer';
import { DocumentContractContainer } from './documentContract/DocumentContractContainer';
import { DocumentUploadedContainer } from './documentUploaded/DocumentUploadedContainer';

export const DocumentDetailsContainer = () => {
  return (
    <Switch>
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', DocumentKind.ListOfCase)}
        render={() => <DocumentListOfCaseContainer />}
      />
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', DocumentKind.Questionnaires)}
        render={() => <DocumentQuestionnaireContainer />}
      />
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', DocumentKind.Contracts)}
        render={() => <DocumentContractContainer />}
      />
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', DocumentKind.Custom)}
        render={() => <DocumentUploadedContainer />}
      />
    </Switch>
  );
};

export default DocumentDetailsContainer;
