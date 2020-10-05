import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';

import { SummaryProps } from './Summary.types';
import { SummaryGeneralContainer } from './summaryGeneral/SummaryGeneralContainer';

export const Summary = ({ summary, isSidebarVisible, onSidebarOpen, ...props }: SummaryProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'pim_details.summary.details' })} urlBase={baseUrl} to="/summary" />
      <Switch>
        <Route
          default
          path={`${baseUrl}/summary`}
          exact
          render={() => <SummaryGeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
        />
        <Redirect to={`${baseUrl}/summary`} />
      </Switch>
    </>
  );
};
