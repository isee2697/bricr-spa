import React from 'react';
import { useParams } from 'react-router';
import { useObjectTypeOverallInfoQuery } from 'api/types';

import { ObjectTypeDetails } from './ObjectTypeDetails';

export const ObjectTypeDetailsContainer = () => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const { loading, data, error } = useObjectTypeOverallInfoQuery({ variables: { id, projectId } });

  return (
    <>
      <ObjectTypeDetails data={data} loading={loading} error={error} />
    </>
  );
};
