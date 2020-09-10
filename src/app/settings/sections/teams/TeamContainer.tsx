import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  GetTeamDetailsDocument,
  SettingInfoDocument,
  Team as TeamData,
  useGetTeamDetailsQuery,
  useRemoveTeamMutation,
  useUpdateTeamMutation,
} from 'api/types';
import { Loader } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { Team } from './Team';

export const TeamContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTeamDetailsQuery({ variables: { id } });
  const { push } = useHistory();
  const [updateTeam] = useUpdateTeamMutation();
  const [removeTeam] = useRemoveTeamMutation();

  const refetchQueries = [
    {
      query: SettingInfoDocument,
    },
    { query: GetTeamDetailsDocument, variables: { id } },
  ];

  const handleRemove = async (teamId: string) => {
    try {
      const response = await removeTeam({ variables: { id: teamId }, refetchQueries });

      if (!response) {
        throw Error();
      }

      push(`${AppRoute.settings}/createTeam`);

      return undefined;
    } catch {
      return { error: true };
    }
  };

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
        refetchQueries,
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
    return <Team data={data.getTeamDetails as TeamData} onRemove={handleRemove} onSave={handleSave} />;
  }

  return <Loader />;
};
