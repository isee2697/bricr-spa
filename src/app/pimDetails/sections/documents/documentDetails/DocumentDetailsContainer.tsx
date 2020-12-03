import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { DocumentListOfCaseContainer } from './documentListOfCase/DocumentListOfCaseContainer';
import { DocumentQuestionnaireContainer } from './documentQuestionnaire/DocumentQuestionnaireContainer';

export const DocumentDetailsContainer = () => {
  return (
    <Switch>
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', 'list-of-case')}
        render={() => <DocumentListOfCaseContainer />}
      />
      <Route
        path={AppRoute.pimDocumentDetails.replace(':kind', 'questionnaire')}
        render={() => <DocumentQuestionnaireContainer />}
      />
    </Switch>
  );
};
