import React, { useState } from 'react';

import { TeamMember } from 'api/types';
import { CardWithList } from 'ui/templates';
import { useLocale } from 'hooks';
import { AddMemberModalContainer } from 'app/settings/sections/teams/modals/AddMemberModalContainer';
import { ListOptionsMenu } from 'ui/molecules';

import { TeamMemberProps } from './Team.types';
import { TeammemberItemForm } from './item/TeamMemberItemForm';

export const TeamMembers = ({ data, onSave, onRemove }: TeamMemberProps) => {
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
          return <TeammemberItemForm />;
        }}
        items={data}
        onSave={onSave}
        renderSubOptions={profile => (
          <ListOptionsMenu
            deleteText={formatMessage({ id: 'settings.teams.members.delete' })}
            onDeleteClick={() => onRemove(profile.user.id)}
            hideEditButton
          />
        )}
      />
      <AddMemberModalContainer teamMembers={data} isOpened={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
