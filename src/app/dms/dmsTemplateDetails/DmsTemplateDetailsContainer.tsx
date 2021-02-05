import React from 'react';
import { Switch, useParams, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { Templates } from 'api/mocks/dms';

import { DmsTemplateGeneralDetails } from './dmsTemplateGeneralDetails/DmsTemplateGeneralDetails';
import { DmsTemplateLayoutDetails } from './dmsTemplateLayoutDetails/DmsTemplateLayoutDetails';
import { DmsTemplateConfigureSettingsDetails } from './dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails';

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
          path={`${AppRoute.dms}/templates/:type/:category/${id}/general`}
          render={() => <DmsTemplateGeneralDetails template={data} />}
        />
        <Route
          path={`${AppRoute.dms}/templates/:type/:category/${id}/configureSettings`}
          render={() => <DmsTemplateConfigureSettingsDetails template={data} />}
        />
        <Route
          path={`${AppRoute.dms}/templates/:type/:category/${id}/layoutPreview`}
          render={() => <DmsTemplateLayoutDetails template={data} />}
        />
        <Redirect to={`${AppRoute.dms}/templates/:type/:category/${id}/general`} />
      </Switch>
    </>
  );
};
