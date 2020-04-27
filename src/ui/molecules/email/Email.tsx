import React from 'react';

import { UserAvatar, Box, Typography } from '../../atoms';

import { EmailProps } from './Email.types';
import { useStyles } from './Email.styles';

export const Email = (props: EmailProps) => {
  const { name, avatar, title, date, children, onClick } = props;
  const classes = useStyles(props);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <Box display="flex" flexWrap="wrap" pb={1.5} pt={2} className={classes.wrapper} onClick={onClick}>
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
            <Typography className={classes.date}>
              {hours}:{minutes}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box ml={5}>
        <Typography className={classes.description}>{children}</Typography>
      </Box>
    </Box>
  );
};
