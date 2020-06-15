import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimDetailsQuery, usePimServicesQuery, usePimCadastreQuery } from 'api/types';

import { PimDetails } from './PimDetails';

export const PimDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = usePimDetailsQuery({ variables: { id } });
  const { data: servicesData, loading: loadingServices, error: errorServices } = usePimServicesQuery({
    variables: { id },
  });
  const { data: cadastreData, loading: loadingCadastre, error: errorCadastre } = usePimCadastreQuery({
    variables: { id },
  });

  return (
    <PimDetails
      loading={loading || loadingServices || loadingCadastre}
      error={error || errorServices || errorCadastre}
      data={data}
      servicesData={servicesData}
      cadastreData={cadastreData}
    />
  );
};
