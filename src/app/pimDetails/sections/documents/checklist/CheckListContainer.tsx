import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { CheckListViewContainer } from './checklistView/CheckListViewContainer';
import { CheckListItemContainer } from './checklistItem/CheckListItemContainer';

export const DocumentsCheckListContainer = (props: PimDetailsSectionProps) => {
  const { isSidebarVisible, onSidebarOpen } = props;

  return (
    <Switch>
      <Route
        path={`${AppRoute.pimDetails}/documents/checklist/:docId`}
        render={() => <CheckListItemContainer {...props} />}
      />
      <Route
        path={`${AppRoute.pimDetails}/documents/checklist`}
        render={({ match }) => (
          <CheckListViewContainer
            isSidebarVisible={isSidebarVisible}
            onSidebarOpen={onSidebarOpen}
            path={`${AppRoute.pimDetails.replace(':id', match.params.id)}/documents/checklist`}
          />
        )}
      />
      <Redirect to={`${AppRoute.pimDetails}/documents/checklist`} />
    </Switch>
  );
};
