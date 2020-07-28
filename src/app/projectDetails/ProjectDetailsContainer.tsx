import React from 'react';
import { useParams } from 'react-router-dom';

import { useNcpGeneralQuery } from 'api/types';

import { ProjectDetails } from './ProjectDetails';

export const ProjectDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useNcpGeneralQuery({ variables: { id } });

  return (
    <>
      <ProjectDetails ncp={data} />
    </>
  );
};
