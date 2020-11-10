import React from 'react';
import { DateTime } from 'luxon';

import { Avatar, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { RepliesProps } from './Replies.types';
import { useStyles } from './Replies.styles';

export const Replies = ({ email: { subject }, replies }: RepliesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {replies.map((reply, index) => (
        <Box width="100%" className={classes.row}>
          <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.rowContent}>
            <Box display="flex" alignItems="center">
              <Avatar size="small" src={reply.from.image} />
              <Box ml={2.25} />
              <Typography variant="h5" noWrap>
                {reply.from.firstName} {reply.from.lastName}
              </Typography>
              <Box ml={7} />
              <Box>
                <Typography variant="h5">{formatMessage({ id: 'email.reply' }, { subject: subject })}</Typography>
              </Box>
            </Box>
            <Typography variant="h5">{reply.date.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
