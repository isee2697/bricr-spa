import React from 'react';
import { useParams } from 'react-router';

import { useObjectTypeGeneralQuery } from 'api/types';

import { ObjectTypeDetails } from './ObjectTypeDetails';

export const ObjectTypeDetailsContainer = () => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const { data } = useObjectTypeGeneralQuery({ variables: { id, projectId } });

  return (
    <>
      <ObjectTypeDetails data={data} />
    </>
  );
};
