import React from 'react';
import clsx from 'clsx';

import { Box, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import FolderPrimary0 from 'ui/atoms/icons/svg/folderPrimary0.svg';
import FolderPrimary10 from 'ui/atoms/icons/svg/folderPrimary10.svg';
import FolderPrimary20 from 'ui/atoms/icons/svg/folderPrimary20.svg';
import FolderPrimary30 from 'ui/atoms/icons/svg/folderPrimary30.svg';
import FolderPrimary40 from 'ui/atoms/icons/svg/folderPrimary40.svg';
import FolderPrimary50 from 'ui/atoms/icons/svg/folderPrimary50.svg';
import FolderSecondary0 from 'ui/atoms/icons/svg/folderSecondary0.svg';
import FolderSecondary10 from 'ui/atoms/icons/svg/folderSecondary10.svg';
import FolderSecondary20 from 'ui/atoms/icons/svg/folderSecondary20.svg';
import FolderSecondary30 from 'ui/atoms/icons/svg/folderSecondary30.svg';
import FolderSecondary40 from 'ui/atoms/icons/svg/folderSecondary40.svg';
import FolderSecondary50 from 'ui/atoms/icons/svg/folderSecondary50.svg';
import FolderBorder from 'ui/atoms/icons/svg/folderBorder.svg';
import FolderOpened from 'ui/atoms/icons/svg/folderOpened.svg';

import { useStyles } from './DmsFolderIcon.styles';
import { DmsFolderIconProps } from './DmsFolderIcon.types';

const folders = {
  primary: [FolderPrimary0, FolderPrimary10, FolderPrimary20, FolderPrimary30, FolderPrimary40, FolderPrimary50],
  secondary: [
    FolderSecondary0,
    FolderSecondary10,
    FolderSecondary20,
    FolderSecondary30,
    FolderSecondary40,
    FolderSecondary50,
  ],
  opened: FolderOpened,
  add: FolderBorder,
};

export const DmsFolderIcon = ({
  name,
  type: defaultType,
  childCount: defaultChildCount,
  isOpened,
  isAdd,
  onClick,
}: DmsFolderIconProps) => {
  const classes = useStyles();
  const type = isOpened ? 'primary' : defaultType;
  const childCount = defaultChildCount || 0;
  const icon = isAdd
    ? folders.add
    : folders[!isOpened && type ? type : 'primary'][childCount > 50 ? 5 : Math.floor(childCount / 10)];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {isOpened && <Box className={classes.openedWrapper} style={{ backgroundImage: `url(${FolderOpened})` }}></Box>}
      <Box
        className={clsx(classes.iconWrapper, isAdd && classes.addWrapper)}
        style={{ backgroundImage: `url(${icon})` }}
        onClick={onClick}
      >
        {isAdd ? (
          <Box className={classes.addIcon}>
            <AddIcon />
          </Box>
        ) : (
          <Box className={clsx(classes.iconBadge, type)}>{childCount || '-'}</Box>
        )}
      </Box>
      <Box>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
