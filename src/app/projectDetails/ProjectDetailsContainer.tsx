import React from 'react';
import { useParams } from 'react-router-dom';

import { useNcpGeneralQuery, useListObjectTypesCountQuery } from 'api/types';

import { ProjectDetails } from './ProjectDetails';

export const ProjectDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data: ncp } = useNcpGeneralQuery({ variables: { id } });
  const { data: count } = useListObjectTypesCountQuery({ variables: { ncpId: id } });

  return <ProjectDetails ncp={ncp} count={count} />;
};
