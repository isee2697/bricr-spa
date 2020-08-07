import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { GeneralMainContainer } from 'app/pimDetails/sections/general/generalMain/GeneralMainContainer';
import { LocationContainer } from 'app/pimDetails/sections/general/location/LocationContainer';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';

export const General = (props: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/general"
        title={formatMessage({ id: 'pim_details.general.title' })}
      />
      <Switch>
        <Route default path={`${baseUrl}/general`} exact render={() => <GeneralMainContainer {...props} />} />
        <Route path={`${baseUrl}/general/location`} exact render={() => <LocationContainer {...props} />} />
        <Redirect to={`${baseUrl}/general`} />
      </Switch>
    </>
  );
};
