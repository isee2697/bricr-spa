import React from 'react';

import { UserAvatar, Box, Typography } from '../../atoms';

import { EmailProps } from './Email.types';
import { useStyles } from './Email.styles';

export const Email = ({ name, avatar, title, date, children, id, onClick, open }: EmailProps) => {
  const classes = useStyles({ open });
  const time = date.toTimeString().substr(0, 5);

  return (
    <Box display="flex" flexWrap="wrap" pb={1.5} pt={2} className={classes.wrapper} id={id} onClick={() => onClick(id)}>
      <Box display="flex" width="100%" flexWrap="wrap" alignItems="center" mb={0.5}>
        <Box mr={1}>
          <UserAvatar name={name} avatar={avatar} />
        </Box>
        <Box display="flex" flexGrow={1}>
          <Box flexGrow={1}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.title}>{title}</Typography>
          </Box>
          <Box>
            <Typography className={classes.date}>{time}</Typography>
          </Box>
        </Box>
      </Box>
      <Box ml={5}>
        <Typography className={classes.description}>{children}</Typography>
      </Box>
    </Box>
  );
};
