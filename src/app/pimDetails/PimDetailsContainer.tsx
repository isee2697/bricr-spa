import React from 'react';
import { useParams } from 'react-router-dom';

import { Pim, usePimOverallInfoQuery } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { EntityType } from 'app/shared/entityType';
import { useStateQuery } from 'hooks/useStateQuery/useStateQuery';

import { PimDetails } from './PimDetails';

export const PimDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  const { loading, error, data } = useStateQuery({
    query: usePimOverallInfoQuery,
    variables: { id },
  });

  const pim: Pim = data as Pim;

  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.pim' })} to={AppRoute.pim} />
      <NavBreadcrumb title={title} urlBase={AppRoute.pimDetails} />
    </>
  );

  return (
    <PimDetails
      loading={loading}
      error={error}
      data={pim}
      breadcrumbs={breadcrumbs}
      path={AppRoute.pimDetails}
      entityType={EntityType.Property}
      isPurchased={true}
    />
  );
};

export default PimDetailsContainer;
