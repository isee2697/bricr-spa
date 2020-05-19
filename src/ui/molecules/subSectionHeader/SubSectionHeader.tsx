import React from 'react';

import { MenuIcon, ArrowUpIcon, ArrowDownIcon } from 'ui/atoms/icons';
import { Grid, IconButton } from 'ui/atoms';

import { useStyles } from './SubSectionHeader.styles';
import { SubSectionHeaderProps } from './SubSectionHeader.types';

export const SubSectionHeader = ({ children, toggled, onOptionsClick, onToggleClick }: SubSectionHeaderProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} alignItems="center" container>
      <Grid item>{children}</Grid>
      <Grid className={classes.menu} item>
        <IconButton onClick={onOptionsClick}>
          <MenuIcon />
        </IconButton>
        <IconButton onClick={onToggleClick}>{toggled ? <ArrowUpIcon /> : <ArrowDownIcon />}</IconButton>
      </Grid>
    </Grid>
  );
};
