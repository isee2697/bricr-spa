import React from 'react';
import clsx from 'clsx';

import { Box, Typography } from 'ui/atoms';
import { AddIcon, DirectoryBorderedIcon, DirectoryIcon, DirectoryOpenedIcon } from 'ui/atoms/icons';

import { useStyles } from './DmsFolderIcon.styles';
import { DmsFolderIconProps } from './DmsFolderIcon.types';

export const DmsFolderIcon = ({
  id,
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

  return (
    <Box display="flex" flexDirection="column" alignItems="center" className={classes.root}>
      {isOpened && <DirectoryOpenedIcon className={classes.openedWrapper} />}
      <Box className={clsx(classes.iconWrapper, isAdd && classes.addWrapper)} onClick={onClick}>
        {isAdd ? (
          <>
            <DirectoryBorderedIcon className={classes.icon} />
            <Box className={classes.addIcon}>
              <AddIcon />
            </Box>
          </>
        ) : (
          <>
            <DirectoryIcon
              id={id + '_' + type}
              variant={type}
              weight={Math.floor(childCount / 10)}
              className={classes.icon}
            />
            <Box className={clsx(classes.iconBadge, type)}>{childCount || '-'}</Box>
          </>
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
