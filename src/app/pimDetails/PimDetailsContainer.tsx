import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimDetailsQuery } from 'api/types';

import { PimDetails } from './PimDetails';

export const PimDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = usePimDetailsQuery({ variables: { id } });

  return <PimDetails loading={loading} error={error} data={data} />;
};
