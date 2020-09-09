import React, { useState } from 'react';

import { TeamMember } from 'api/types';
import { CardWithList } from 'ui/templates';
import { useLocale } from 'hooks';
import { AddMemberModalContainer } from 'app/settings/sections/teams/modals/AddMemberModalContainer';

import { TeamMemberProps } from './Team.types';

export const TeamMembers = ({ data, onSave, onAdd }: TeamMemberProps) => {
  const [isOpen, setOpen] = useState(false);
  const { formatMessage } = useLocale();

  return (
    <>
      <CardWithList<TeamMember>
        onAdd={() => setOpen(true)}
        title={formatMessage({ id: 'settings.teams.members.title' })}
        emptyStateTextFirst={formatMessage({ id: 'settings.teams.members.empty_title' })}
        emptyStateTextSecond={formatMessage({ id: 'settings.teams.members.empty_description' })}
        emoji="😥"
        renderItem={(teamMember, isEditing) => {
          return <>{teamMember?.user?.firstName}</>;
        }}
        items={data}
        onSave={onSave}
      />
      <AddMemberModalContainer teamMembers={data} isOpened={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
