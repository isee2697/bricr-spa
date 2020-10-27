import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { DmsDocumentsContainerProps } from './DmsDocumentsContainer.types';
import { DmsDocuments } from './DmsDocuments';
import { DmsFolders } from './dmsFolders/DmsFolders';

export const DmsDocumentsContainer = ({ dms }: DmsDocumentsContainerProps) => {
  const { state } = useLocation<{ newlyAdded: boolean }>();
  const path = AppRoute.dms + '/documents';

  return (
    <Switch>
      <Route
        path={`${path}/:id`}
        render={path => {
          const data = dms.folders?.find(item => item.data.id === path.match.params.id)?.data;

          return data ? <DmsFolders data={data} /> : null;
        }}
      />
      <Route path={`${path}`} render={() => <DmsDocuments dms={dms} />} />
      <Redirect to={{ pathname: `${path}`, state }} />
    </Switch>
  );
};
