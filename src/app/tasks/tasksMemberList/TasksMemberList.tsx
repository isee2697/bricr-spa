import React, { useState } from 'react';
import clsx from 'classnames';
import { useTheme } from '@material-ui/core/styles';

import { Box, UserAvatar, Typography, ScrollableHorizontal } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TeamMemberItem } from '../Tasks.types';

import { useStyles } from './TasksMemberList.styles';
import { TasksMemberListProps } from './TasksMemberList.types';

export const TasksMemberList = ({ members }: TasksMemberListProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();

  const [selectedUsers, setSelectedUsers] = useState<TeamMemberItem[]>([members[0]]);

  const selectMember = (user: TeamMemberItem) => () => {
    const index = selectedUsers.findIndex(u => user.id === u.id);

    if (index >= 0) {
      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <>
      <ScrollableHorizontal width="100%" maxWidth="100%" height={theme.spacing(8)} className={classes.root}>
        {members.map((member, index) => (
          <Box
            key={index}
            className={clsx(
              classes.member,
              classes.inlineBlock,
              selectedUsers.findIndex(u => u.id === member.id) >= 0 && 'selected',
            )}
            onClick={selectMember(member)}
          >
            <Box className={clsx(classes.avatar, classes.inlineBlock)}>
              <UserAvatar size="small" name={member.firstName + ' ' + member.lastName} />
            </Box>
            <Typography variant="h5" className={clsx(classes.name, classes.inlineBlock)}>
              {member.firstName} {member.lastName}
              {index === 0 && ` (${formatMessage({ id: 'tasks.members.me' })})`}
            </Typography>
          </Box>
        ))}
      </ScrollableHorizontal>
    </>
  );
};
