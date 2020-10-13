import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';

import { SummaryProps } from './Summary.types';
import { SummaryGeneralContainer } from './summaryGeneral/SummaryGeneralContainer';
import { SummaryInsideContainer } from './summaryInside/SummaryInsideContainer';
import { SummaryPersonalContainer } from './summaryPersonal/SummaryPersonalContainer';
import { SummaryOutside } from './summaryOutside/SummaryOutside';

export const Summary = ({ summary, isSidebarVisible, onSidebarOpen, ...props }: SummaryProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'pim_details.summary.title' })} urlBase={baseUrl} to="/summary" />
      <Switch>
        <Route
          default
          path={`${baseUrl}/summary`}
          exact
          render={() => (
            <SummaryGeneralContainer
              summary={summary}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
            />
          )}
        />
        <Route
          path={`${baseUrl}/summary/inside`}
          exact
          render={() => (
            <SummaryInsideContainer
              summary={summary}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
            />
          )}
        />
        <Route
          path={`${baseUrl}/summary/outside`}
          exact
          render={() => (
            <SummaryOutside isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} summary={summary} />
          )}
        />
        <Route
          path={`${baseUrl}/summary/personal`}
          exact
          render={() => (
            <SummaryPersonalContainer
              summary={summary}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
            />
          )}
        />
        <Redirect to={`${baseUrl}/summary`} />
      </Switch>
    </>
  );
};
