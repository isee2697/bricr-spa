import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { CRM as mockCrm } from 'api/mocks/crm';
import { EntityType } from 'app/shared/entityType';
import { CrmType, useGetCrmGeneralQuery, CrmGeneral } from 'api/types';
import { useStateQuery } from 'hooks/useStateQuery/useStateQuery';

import { CrmRelationsDetails } from './CrmRelationsDetails';

export const CrmRelationsDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const { loading, data } = useStateQuery({
    query: useGetCrmGeneralQuery,
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }
  const { firstName, initials, lastName, avatar } = data as CrmGeneral;

  const crm = { ...mockCrm, id, firstName, initials, lastName, avatar };

  const crmType = CrmType.Relation;

  const title = `${firstName || ''} ${lastName || ''}`;

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

export default CrmRelationsDetailsContainer;
