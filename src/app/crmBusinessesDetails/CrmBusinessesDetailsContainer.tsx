import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { NavBreadcrumb } from 'ui/atoms';
import { CrmType } from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CRM_BUSINESSES } from 'api/mocks/crm-business';

import { CrmBusinessesDetails } from './CrmBusinessesDetails';

export const CrmBusinessesDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const data = CRM_BUSINESSES.find(business => business.id === id);

  const crm = { ...mockCrm, ...data };

  const crmType = CrmType.Business;

  const title = `${crm.firstName || ''} ${crm.lastName || ''}`;

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.crm' })} to={AppRoute.crm} />
      <NavBreadcrumb title={formatMessage({ id: `crm.type.${crmType}` })} to={`${AppRoute.crm}?type=${crmType}`} />
      <NavBreadcrumb title={title} urlBase={AppRoute.crmBusinessesDetails} />
    </>
  );

  return (
    <CrmBusinessesDetails
      crm={crm}
      breadcrumbs={breadcrumbs}
      path={AppRoute.crmBusinessesDetails}
      entityType={EntityType.CrmBusinesses}
    />
  );
};

export default CrmBusinessesDetailsContainer;
