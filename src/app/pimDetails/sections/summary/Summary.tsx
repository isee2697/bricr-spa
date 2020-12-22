import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';

import { SummaryProps } from './Summary.types';
import { SummaryGeneral } from './summaryGeneral/SummaryGeneral';
import { SummaryOutside } from './summaryOutside/SummaryOutside';
import { SummaryInside } from './summaryInside/SummaryInside';
import { SummaryPersonal } from './summaryPersonal/SummaryPersonal';
import { SignsAndKey } from './signsAndKey/SignsAndKey';
import { AuditChecklist } from './auditChecklist/AuditChecklist';

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
            <SummaryGeneral summary={summary} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
          )}
        />
        <Route
          path={`${baseUrl}/summary/inside`}
          exact
          render={() => (
            <SummaryInside summary={summary} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
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
            <SummaryPersonal summary={summary} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
          )}
        />
        <Route
          path={`${baseUrl}/summary/signsAndKey`}
          exact
          render={() => (
            <SignsAndKey summary={summary} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
          )}
        />
        <Route
          path={`${baseUrl}/summary/auditChecklist`}
          exact
          render={() => (
            <AuditChecklist summary={summary} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
          )}
        />
        <Redirect to={`${baseUrl}/summary`} />
      </Switch>
    </>
  );
};
