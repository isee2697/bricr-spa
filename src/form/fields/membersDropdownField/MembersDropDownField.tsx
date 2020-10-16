import React from 'react';

import { TeamMemberItem } from 'app/tasks/Tasks.types';
import { UserAvatar, Box, Avatar } from 'ui/atoms';
import { useAuthState, useLocale } from 'hooks';
import { AdvancedSearchField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { AdvancedSearchItem } from 'ui/molecules/advancedSearch/AdvancedSearch.types';
import { AdvancedSearchFieldProps } from 'form/fields/advancedSearchField/AdvancedSearchField.types';

import { useStyles } from './MembersDropdownField.styles';

export const MembersDropdownField = ({
  members,
  placeholder,
  name = 'members',
  ...props
}: Partial<AdvancedSearchFieldProps> & { members: TeamMemberItem[] }) => {
  const { user } = useAuthState();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const assignees: AdvancedSearchItem[] = members.map((member: TeamMemberItem) => ({
    label: `${member?.firstName} ${member?.lastName} ${
      member.id === user?.id ? `(${formatMessage({ id: 'tasks.members.me' })})` : ''
    }`,
    value: member?.id,
    icon: <UserAvatar size="small" name={member?.firstName + ' ' + member?.lastName} />,
  }));

  return (
    <AdvancedSearchField
      {...props}
      validate={[requireValidator]}
      items={assignees}
      placeholder={
        <Box display="flex" alignItems="center" className={classes.assigneePlaceholder}>
          <Avatar />
          <span className={classes.assigneePlaceholderMessage}>
            {formatMessage({ id: 'tasks.create_new.details.assignee.placeholder' })}
          </span>
        </Box>
      }
      name="assignee"
      label="tasks.create_new.details.assignee.label"
      align="left"
      classes={{
        input: classes.assigneeInput,
        inputInner: classes.assigneeInputInner,
        searchField: classes.searchField,
        searchFieldInput: classes.searchFieldInput,
        itemLabelWrapper: classes.assigneeItemLabelWrapper,
      }}
    />
  );
};
