import React from 'react';
import { useTheme } from '@material-ui/core';

import { Avatar, Box } from '../index';
import { EntityType } from 'app/shared/entityType';

import { useStyles } from './SidebarTitleTile.styles';
import { SidebarTitleTileProps } from './SidebarTitleTile.types';

export const SidebarTitleTile = ({
  title,
  subtitle,
  category,
  icon,
  prevPage,
  prevPageicon,
}: SidebarTitleTileProps) => {
  const theme = useTheme();

  const getCategory = (category: EntityType, light: boolean): string | undefined => {
    switch (category) {
      case EntityType.Project:
        return theme.palette.green[light ? 'light' : 'main'];
      case EntityType.ObjectType:
        return theme.palette.purple[light ? 'light' : 'main'];
      default:
        return theme.palette.gray[light ? 'light' : 'main'];
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
        <Avatar variant="rounded" bgcolor={theme.palette.white.main}>
          <Box color={getCategory(category ?? EntityType.Project, false)}>{icon}</Box>
        </Avatar>
        <div color={getCategory(category ?? EntityType.Project, false)} className={classes.content}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};
