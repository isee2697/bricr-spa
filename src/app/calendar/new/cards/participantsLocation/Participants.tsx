import React, { useState } from 'react';
import { Field } from 'react-final-form';

import { Grid, UserAvatar, Typography, IconButton, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { MembersDropdownField } from 'form/fields';
import { Profile } from 'api/types';
import { CloseIcon } from 'ui/atoms/icons';

export const Participants = ({ members }: { members: Profile[] }) => {
  const { formatMessage } = useLocale();
  const [assignedUsers, setAssignedUsers] = useState<Profile[]>([]);

  return (
    <>
      <MembersDropdownField
        onChange={profileId => {
          const profile = members.find(member => member.id === profileId);
          profile && setAssignedUsers(assigned => [...assigned, profile]);
        }}
        members={members.filter(member => !assignedUsers.includes(member))}
        label={undefined}
        name="member_select"
      />
      <Box mt={2} mb={2}>
        <Typography variant="h5">{formatMessage({ id: 'appointment.invited_users.label' })}</Typography>
      </Box>
      {/*<Field name="invitedUsers" value={assignedUsers}>*/}
      {/*  {props => <input {...props.input} />}*/}
      {/*</Field>*/}
      <>
        {assignedUsers.map(member => (
          <Grid container alignItems="center">
            <Box mr={2}>
              <UserAvatar
                avatar={member?.image?.url ?? undefined}
                size="small"
                name={`${member?.firstName} ${member?.lastName}`}
              />
            </Box>
            <Typography>{`${member?.firstName} ${member?.lastName}`}</Typography>
            <Grid item className="right">
              <IconButton
                onClick={() => setAssignedUsers(assigned => assigned.filter(assignee => assignee.id !== member.id))}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </>
    </>
  );
};
