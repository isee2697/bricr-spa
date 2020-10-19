import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { DMSMeta } from 'api/mocks/dms';

import { Dms } from './Dms';

export const DmsContainer = () => {
  const { formatMessage } = useLocale();

  const dms = DMSMeta;

  if (!dms) {
    return <Loader />;
  }

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.dms' })} to={AppRoute.dms} />
    </>
  );

  return <Dms dms={dms} breadcrumbs={breadcrumbs} path={AppRoute.dms} entityType={EntityType.Dms} />;
};
