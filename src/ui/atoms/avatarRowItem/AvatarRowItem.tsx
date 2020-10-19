import React from 'react';

import { Box, Grid, IconButton, Typography, UserAvatar } from 'ui/atoms/index';
import { CloseIcon } from 'ui/atoms/icons';

import { AvatarRowItemProps } from './AvatarRowItem.types';

export const AvatarRowItem = ({ icon, name, content, src, onDelete, onClick }: AvatarRowItemProps) => {
  return (
    <Grid onClick={onClick} container alignItems="center">
      <Box mr={2}>{icon ?? <UserAvatar avatar={src} size="small" name={name ?? ''} />}</Box>
      <Box>{content ?? <Typography>{name}</Typography>}</Box>
      {onDelete && (
        <Grid item className="right">
          <IconButton onClick={onDelete}>
            <CloseIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};
