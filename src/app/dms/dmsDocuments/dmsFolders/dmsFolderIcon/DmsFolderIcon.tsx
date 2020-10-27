import React from 'react';

import { Box, Typography } from 'ui/atoms';
import Folder0 from 'ui/atoms/icons/svg/folder-0.svg';
import Folder10 from 'ui/atoms/icons/svg/folder-10.svg';
import Folder20 from 'ui/atoms/icons/svg/folder-20.svg';
import Folder30 from 'ui/atoms/icons/svg/folder-30.svg';
import Folder40 from 'ui/atoms/icons/svg/folder-40.svg';
import Folder50 from 'ui/atoms/icons/svg/folder-50.svg';

import { useStyles } from './DmsFolderIcon.styles';
import { DmsFolderIconProps } from './DmsFolderIcon.types';

const folders = {
  primary: [Folder0, Folder10, Folder20, Folder30, Folder40, Folder50],
  secondary: [Folder0, Folder10, Folder20, Folder30, Folder40, Folder50],
  opened: Folder0,
};

export const DmsFolderIcon = ({ name, type, childCount, isOpened, onClick }: DmsFolderIconProps) => {
  const classes = useStyles();
  const icon = isOpened
    ? folders.opened
    : folders[type || 'primary'][childCount > 50 ? 5 : Math.floor(childCount / 10)];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      <Box className={classes.iconWrapper} style={{ backgroundImage: `url(${icon})` }} onClick={onClick}>
        <Box className={classes.iconBadge}>{childCount || '-'}</Box>
      </Box>
      <Box>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
