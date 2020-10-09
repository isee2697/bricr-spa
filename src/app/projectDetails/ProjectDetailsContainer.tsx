import React from 'react';
import { useParams } from 'react-router-dom';
import { useNcpGeneralOverallInfoQuery } from 'api/types';

import { ProjectDetails } from './ProjectDetails';

export const ProjectDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data, error } = useNcpGeneralOverallInfoQuery({ variables: { id } });

  return <ProjectDetails data={data} error={error} loading={loading} />;
};
