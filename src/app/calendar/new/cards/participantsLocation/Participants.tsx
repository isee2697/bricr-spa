import React from 'react';
import { useForm } from 'react-final-form';

import { Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { MembersDropdownField } from 'form/fields';
import { Profile } from 'api/types';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';

export const Participants = ({ members }: { members: Profile[] }) => {
  const fieldName = 'invitedPersons';
  const membersSelectField = 'members_no_submit_value';
  const { formatMessage } = useLocale();
  const form = useForm();
  const inviteUserId = form.getState().values?.[membersSelectField];
  const assignedUsers: string[] = form.getState().values?.[fieldName] ?? [];

  //empty select and add value to form array
  if (!!inviteUserId && !assignedUsers.includes(inviteUserId)) {
    form.change(fieldName, [...assignedUsers, inviteUserId]);
    form.change(membersSelectField, undefined);
  }

  return (
    <>
      <MembersDropdownField
        members={members.filter(member => !assignedUsers.find(id => member.id === id))}
        label={undefined}
        name={membersSelectField}
        validate={[]}
      />
      {assignedUsers.length > 0 && (
        <Box mt={2} mb={2}>
          <Typography variant="h5">{formatMessage({ id: 'appointment.invited_users.label' })}</Typography>
        </Box>
      )}
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
