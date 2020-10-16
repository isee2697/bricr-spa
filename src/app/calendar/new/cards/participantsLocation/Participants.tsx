import React, { useState } from 'react';
import { Field, useField, useForm } from 'react-final-form';

import { Grid, UserAvatar, Typography, IconButton, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { MembersDropdownField } from 'form/fields';
import { Profile } from 'api/types';
import { CloseIcon } from 'ui/atoms/icons';
import { size } from 'app/pimDetails/sections/cadastre/plot/dictionaries';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';

export const Participants = ({ members }: { members: Profile[] }) => {
  const fieldName = 'invitedPersons';
  const { formatMessage } = useLocale();
  const form = useForm();
  const assignedUsers: string[] = form.getState().values?.[fieldName] ?? [];

  return (
    <>
      <MembersDropdownField
        onChange={profileId => form.change(fieldName, [...assignedUsers, profileId])}
        members={members.filter(member => !assignedUsers.find(id => member.id === id))}
        label={undefined}
        name="member_select"
      />
      <Box mt={2} mb={2}>
        <Typography variant="h5">{formatMessage({ id: 'appointment.invited_users.label' })}</Typography>
      </Box>
      <>
        {assignedUsers.map(memberId => {
          const member = members.find(item => item.id === memberId);

          return (
            <AvatarRowItem
              name={`${member?.firstName} ${member?.lastName}`}
              src={member?.image?.url ?? undefined}
              onDelete={() =>
                form.change(
                  fieldName,
                  assignedUsers.filter(profileId => profileId !== memberId),
                )
              }
            />
          );
        })}
      </>
    </>
  );
};
