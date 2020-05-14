import React from 'react';

import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { ArrowUpIcon } from 'ui/atoms/icons/arrowUp/ArrowUpIcon';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';
import { Grid } from 'ui/atoms';

import { useStyles } from './SubSectionHeader.styles';
import { SubSectionHeaderProps } from './SubSectionHeader.types';

export const SubSectionHeader = ({ children, toggled, onOptionsClick, onToggleClick }: SubSectionHeaderProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} alignItems="center" container>
      <Grid item>{children}</Grid>
      <Grid className={classes.menu} item>
        <MenuIcon onClick={onOptionsClick} className={classes.menuIcon} />
        {toggled ? <ArrowUpIcon onClick={onToggleClick} /> : <ArrowDownIcon onClick={onToggleClick} />}
      </Grid>
    </Grid>
  );
};
