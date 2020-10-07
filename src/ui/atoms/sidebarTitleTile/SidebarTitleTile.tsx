import React from 'react';
import { useTheme } from '@material-ui/core';
import { Avatar, Box } from '../index';
import { EntityType } from 'app/shared/entityType';

import { useStyles } from './SidebarTitleTile.styles';
import { SidebarTileCategory, SidebarTitleTileProps } from './SidebarTitleTile.types';

export const SidebarTitleTile = ({
  title,
  subtitle,
  category = SidebarTileCategory.OTHER,
  icon,
  prevPage,
  prevPageicon,
}: SidebarTitleTileProps) => {
  const theme = useTheme();

  const getCategory = (category: EntityType | SidebarTileCategory, light: boolean): string | undefined => {
    switch (category) {
      case EntityType.Project:
        return theme.palette.green[light ? 'light' : 'main'];
      case EntityType.ObjectType:
        return theme.palette.purple[light ? 'light' : 'main'];
      case EntityType.LinkedProperty:
        return theme.palette.blue[light ? 'light' : 'dark'];
      default:
        return theme.palette.gray[light ? 'light' : 'main'];
    }
  };

  const getAvatarBackgroundColor = (category: EntityType | SidebarTileCategory): string => {
    switch (category) {
      case SidebarTileCategory.OTHER:
        return 'transparent';
      default:
        return theme.palette.white.main;
    }
  };

  const classes = useStyles({ bgColor: getCategory(category ?? EntityType.Project, true) });

  return (
    <>
      {prevPage && (
        <div className={classes.prevPage}>
          {prevPageicon && <Box mr={1}>{prevPageicon}</Box>}
          <p>{prevPage}</p>
        </div>
      )}
      <div className={classes.label}>
        <Avatar variant="rounded" bgcolor={getAvatarBackgroundColor(category)}>
          <Box color={getCategory(category, false)}>{icon}</Box>
        </Avatar>
        <div color={getCategory(category, false)} className={classes.content}>
          <p>{title}</p>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </>
  );
};
