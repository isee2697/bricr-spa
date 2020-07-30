import React from 'react';
import { useParams } from 'react-router-dom';

import { useNcpGeneralInformationQuery } from 'api/types';

import { ProjectDetails } from './ProjectDetails';

export const ProjectDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpGeneralInformationQuery({ variables: { id } });

  return <ProjectDetails data={data} />;
};
