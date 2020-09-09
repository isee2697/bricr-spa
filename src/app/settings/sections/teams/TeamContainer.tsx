import React from 'react';
import { useParams } from 'react-router-dom';

import { Team as TeamData, useGetTeamDetailsQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { Team } from './Team';

export const TeamContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTeamDetailsQuery({ variables: { id } });

  const handleSave = async (data: TeamData) => {
    return undefined;
  };

  if (data && !!data.getTeamDetails) {
    return <Team data={data.getTeamDetails as TeamData} onSave={handleSave} />;
  }

  return <Loader />;
};
