import React from 'react';
import { Switch, useParams, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { ContentBlocks } from 'api/mocks/dms';

import { DmsContentBlockGeneralDetails } from './dmsContentBlockGeneralDetails/DmsContentBlockGeneralDetails';
import { DmsContentBlockLayoutDetails } from './dmsContentBlockLayoutDetails/DmsContentBlockLayoutDetails';

export const DmsContentBlockDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const data = ContentBlocks.find(item => item.id === id);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'dms.content_blocks.title' })} to={AppRoute.dms + '/content-blocks'} />
      <Switch>
        <Route
          path={`${AppRoute.dms}/content-blocks/${id}/general`}
          render={() => <DmsContentBlockGeneralDetails block={data} />}
        />
        <Route
          path={`${AppRoute.dms}/content-blocks/${id}/layout`}
          render={() => <DmsContentBlockLayoutDetails block={data} />}
        />
        <Redirect to={`${AppRoute.dms}/content-blocks/${id}/general`} />
      </Switch>
    </>
  );
};
