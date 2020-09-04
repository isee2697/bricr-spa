import React, { useState } from 'react';
import clsx from 'classnames';
import { useTheme } from '@material-ui/core/styles';

import { Box, UserAvatar, Typography, ScrollableHorizontal } from 'ui/atoms';

import { useStyles } from './TasksMemberList.styles';
import { User } from './TasksMemberList.types';

export const TasksMemberList = () => {
  const classes = useStyles();
  const theme = useTheme();

  const users: User[] = [
    {
      id: 0,
      name: 'Marius Nowak',
    },
    {
      id: 1,
      name: 'Christian van Gils',
    },
    {
      id: 2,
      name: 'Wojciech Dobry',
    },
    {
      id: 3,
      name: 'Bartosz Skowroński',
    },
    {
      id: 4,
      name: 'Adam Stachura',
    },
    {
      id: 5,
      name: 'Caroline Carl',
    },
    {
      id: 6,
      name: 'Caroline Zhang',
    },
  ];
  const [selectedUsers, setSelectedUsers] = useState<User[]>([users[0]]);

  const selectMember = (user: User) => () => {
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
        {users.map((user, index) => (
          <Box
            key={index}
            className={clsx(
              classes.member,
              classes.inlineBlock,
              selectedUsers.findIndex(u => u.id === user.id) >= 0 && 'selected',
            )}
            onClick={selectMember(user)}
          >
            <Box className={clsx(classes.avatar, classes.inlineBlock)}>
              <UserAvatar size="small" name={user.name} />
            </Box>
            <Typography variant="h5" className={clsx(classes.name, classes.inlineBlock)}>
              {user.name}
            </Typography>
          </Box>
        ))}
      </ScrollableHorizontal>
    </>
  );
};
