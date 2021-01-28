import React from 'react';
import { useParams } from 'react-router-dom';

import { useNcpGeneralOverallInfoQuery } from 'api/types';

import { ProjectDetails } from './ProjectDetails';

export const ProjectDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpGeneralOverallInfoQuery({ variables: { id } });

  return <ProjectDetails data={data} />;
};

export default ProjectDetailsContainer;
