import React from 'react';
import { useForm } from 'react-final-form';

import { Typography, Box, Card, Tabs, Tab, CardContent } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CheckboxField, MembersDropdownField } from 'form/fields';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';

import { ParticipantProps } from './Participant.types';
import { useStyles } from './Participant.styles';

export const Participant = ({ members }: ParticipantProps) => {
  const fieldName = 'invitedPersons';
  const membersSelectField = 'members_no_submit_value';
  const { formatMessage } = useLocale();
  const form = useForm();
  const inviteUserId = form.getState().values?.[membersSelectField];
  const assignedUsers: string[] = form.getState().values?.[fieldName] ?? [];
  const classes = useStyles();

  //empty select and add value to form array
  if (!!inviteUserId && !assignedUsers.includes(inviteUserId)) {
    form.change(fieldName, [...assignedUsers, inviteUserId]);
    form.change(membersSelectField, undefined);
  }

  return (
    <Card>
      <Tabs className={classes.tabs} value={0} indicatorColor="primary">
        <Tab label={formatMessage({ id: 'appointment.participant.title' })} />
      </Tabs>
      <CardContent>
        <MembersDropdownField
          members={members.filter(member => !assignedUsers.find(id => member.id === id))}
          name={membersSelectField}
          validate={[]}
        />
        {assignedUsers.length > 0 && (
          <Box mt={2} mb={2}>
            <Typography variant="h5">
              {formatMessage({ id: 'appointment.participant.already_invited_users' })}
            </Typography>
          </Box>
        )}
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
        <Box mt={3} />
        <CheckboxField name="collegial" label={formatMessage({ id: 'appointment.participant.collegial' })} />
      </CardContent>
    </Card>
  );
};
