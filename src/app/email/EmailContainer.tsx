import React from 'react';
import { useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { Email } from './Email';

export const EmailContainer = () => {
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const breadcrumbs = (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.email' })}
        to={joinUrlParams(AppRoute.email, urlParams)}
      />
      <NavBreadcrumb title={formatMessage({ id: 'email.list' })} />
    </>
  );

  return <Email breadcrumbs={breadcrumbs} path={AppRoute.email} entityType={EntityType.Email} />;
};
