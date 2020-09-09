import React from 'react';

import { TeamMembers } from 'app/settings/sections/teams/TeamMembers';

import { TeamMemberContainerProps } from './Team.types';

export const TeamMembersContainer = ({ data }: TeamMemberContainerProps) => {
  const handleSave = async () => {
    return undefined;
  };

  return <TeamMembers onAdd={handleSave} onSave={handleSave} data={data} />;
};
