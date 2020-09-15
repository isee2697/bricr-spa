import React from 'react';
import clsx from 'classnames';
import { useTheme } from '@material-ui/core/styles';

import { Box, UserAvatar, Typography, ScrollableHorizontal } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TeamMemberItem } from '../Tasks.types';

import { useStyles } from './TasksMemberList.styles';
import { TasksMemberListProps } from './TasksMemberList.types';

export const TasksMemberList = ({ members, selectedMembers, onSelect }: TasksMemberListProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();

  const selectMember = (user: TeamMemberItem) => () => {
    const index = selectedMembers.findIndex((u: TeamMemberItem) => user.id === u.id);

    if (index >= 0) {
      onSelect(selectedMembers.filter(u => u.id !== user.id));
    } else {
      onSelect([...selectedMembers, user]);
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
              selectedMembers.findIndex(u => u?.id === member?.id) >= 0 && 'selected',
            )}
            onClick={selectMember(member)}
          >
            <Box className={clsx(classes.avatar, classes.inlineBlock)}>
              <UserAvatar size="small" name={member?.firstName + ' ' + member?.lastName} />
            </Box>
            <Typography variant="h5" className={clsx(classes.name, classes.inlineBlock)}>
              {member?.firstName} {member?.lastName}
              {index === 0 && ` (${formatMessage({ id: 'tasks.members.me' })})`}
            </Typography>
          </Box>
        ))}
      </ScrollableHorizontal>
    </>
  );
};
