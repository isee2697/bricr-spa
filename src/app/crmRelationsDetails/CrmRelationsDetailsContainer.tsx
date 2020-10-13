import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { CRMS } from 'api/mocks/crm';
import { CrmType } from 'app/crm/Crm.types';
import { EntityType } from 'app/shared/entityType';

import { CrmRelationsDetails } from './CrmRelationsDetails';

export const CrmRelationsDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const crm = CRMS.find(t => t.id === id);

  if (!crm) {
    return <Loader />;
  }
  const crmType = CrmType.Relations;

  const title = crm.name;

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.crm' })} to={AppRoute.crm} />
      <NavBreadcrumb title={formatMessage({ id: `crm.type.${crmType}` })} to={`${AppRoute.crm}?type=${crmType}`} />
      <NavBreadcrumb title={title} urlBase={AppRoute.crmRelationsDetails} />
    </>
  );

  return (
    <CrmRelationsDetails
      crm={crm}
      breadcrumbs={breadcrumbs}
      path={AppRoute.crmRelationsDetails}
      entityType={EntityType.CrmRelations}
    />
  );
};
