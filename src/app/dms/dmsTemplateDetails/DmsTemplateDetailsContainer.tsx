import React from 'react';
import { Switch, useParams, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { Templates } from 'api/mocks/dms';

import { DmsTemplateGeneralDetails } from './dmsTemplateGeneralDetails/DmsTemplateGeneralDetails';
import { DmsTemplateLayoutDetails } from './dmsTemplateLayoutDetails/DmsTemplateLayoutDetails';

export const DmsTemplateDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const data = Templates.find(item => item.id === id);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'dms.templates.title' })} to={AppRoute.dms + '/templates'} />
      <Switch>
        <Route
          path={`${AppRoute.dms}/templates/${id}/general`}
          render={() => <DmsTemplateGeneralDetails template={data} />}
        />
        <Route
          path={`${AppRoute.dms}/templates/${id}/layout`}
          render={() => <DmsTemplateLayoutDetails template={data} />}
        />
        <Redirect to={`${AppRoute.dms}/templates/${id}/general`} />
      </Switch>
    </>
  );
};
