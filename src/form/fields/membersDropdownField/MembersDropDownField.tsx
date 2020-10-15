import React from 'react';

// import { TeamMemberItem } from 'api/types';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { TeamMemberItem } from 'app/tasks/Tasks.types';
import { UserAvatar } from 'ui/atoms';
import { useAuthState, useLocale } from 'hooks';
import { DropdownFieldProps } from 'form/fields/dropdownField/DropdownField.types';
import { DropdownField } from 'form/fields';
import { requireValidator } from 'form/validators';

import { useStyles } from './MembersDropdownField.styles';

export const MembersDropdownField = ({
  members,
  placeholder,
  name = 'members',
  ...props
}: Partial<DropdownFieldProps> & { members: TeamMemberItem[] }) => {
  const { user } = useAuthState();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const assignees: DropdownItem[] = members.map((member: TeamMemberItem) => ({
    label: (
      <span className={classes.assignee}>
        <UserAvatar
          avatar={member?.image?.url ?? undefined}
          size="small"
          name={member?.firstName + ' ' + member?.lastName}
          className={classes.assigneeAvatar}
        />
        <span>
          {member?.firstName} {member?.lastName}
          {member.id === user?.id && ` (${formatMessage({ id: 'tasks.members.me' })})`}
        </span>
      </span>
    ),
    value: member?.id,
  }));

  return (
    <DropdownField
      {...props}
      name={name}
      validate={[requireValidator]}
      placeholder={placeholder ?? 'tasks.create_new.details.assignee.placeholder'}
      align="left"
      items={assignees}
    />
  );
};
