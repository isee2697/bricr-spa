import React from 'react';
import { useParams } from 'react-router-dom';

import {
  GetTeamDetailsDocument,
  SettingInfoDocument,
  Team as TeamData,
  useGetTeamDetailsQuery,
  useUpdateTeamMutation,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { Team } from './Team';

export const TeamContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTeamDetailsQuery({ variables: { id } });
  const [updateTeam] = useUpdateTeamMutation();

  const handleSave = async (data: TeamData) => {
    try {
      const response = await updateTeam({
        variables: {
          input: {
            teamId: id,
            teamRights: data?.teamRights,
            name: data.name ?? '',
            description: data?.description,
          },
        },
        refetchQueries: [
          {
            query: SettingInfoDocument,
          },
          { query: GetTeamDetailsDocument, variables: { id } },
        ],
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (data && !!data.getTeamDetails) {
    return <Team data={data.getTeamDetails as TeamData} onSave={handleSave} />;
  }

  return <Loader />;
};
