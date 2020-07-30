import React from 'react';
import { useParams } from 'react-router';

import { useNcpGeneralQuery, useGetObjectTypeGeneralQuery } from 'api/types';

import { ObjectTypeDetails } from './ObjectTypeDetails';

export const ObjectTypeDetailsContainer = () => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const { data: ncp } = useNcpGeneralQuery({ variables: { id: projectId } });
  const { data: objectTypes } = useGetObjectTypeGeneralQuery({ variables: { id } });

  return <ObjectTypeDetails ncp={ncp} objectTypes={objectTypes} />;
};
