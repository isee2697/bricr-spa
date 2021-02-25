import React from 'react';
import { useParams } from 'react-router-dom';

import { Pim, useObjectTypeOverallInfoQuery, usePimOverallInfoQuery } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PimDetails } from 'app/pimDetails/PimDetails';
import { EntityType } from 'app/shared/entityType';
import { useStateQuery } from 'hooks/useStateQuery/useStateQuery';

export const LinkedPropertiesDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id, projectId, objectTypeId } = useParams<{ id: string; projectId: string; objectTypeId: string }>();

  const projectUrl = AppRoute.projectDetails.replace(':id', projectId);
  const objectTypeUrl = AppRoute.objectTypeDetails.replace(':id', objectTypeId).replace(':projectId', projectId);
  const linkedPropertyUrl = AppRoute.linkedPropertyDetails
    .replace(':id', id)
    .replace(':projectId', projectId)
    .replace(':objectTypeId', objectTypeId);

  const { loading, error, data: pim } = useStateQuery({
    query: usePimOverallInfoQuery,
    variables: { id },
  });

  const data: Pim = pim as Pim;
  const { data: objectTypeData } = useObjectTypeOverallInfoQuery({ variables: { id: objectTypeId, projectId } });

  const title = data ? `${data.street} ${data.houseNumber} ${data.postalCode} ${data.city}` : '';

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={objectTypeData?.project.name ?? ''} to={projectUrl} />
      <NavBreadcrumb title={objectTypeData?.objectType.name ?? ''} to={objectTypeUrl} />
      <NavBreadcrumb title={title} to={linkedPropertyUrl} />
    </>
  );

  return (
    <PimDetails
      loading={loading}
      error={error}
      data={data}
      breadcrumbs={breadcrumbs}
      path={AppRoute.linkedPropertyDetails}
      entityType={EntityType.LinkedProperty}
      objectTypeName={objectTypeData?.objectType.name}
    />
  );
};

export default LinkedPropertiesDetailsContainer;
