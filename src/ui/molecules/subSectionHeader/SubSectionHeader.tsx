import React from 'react';
import classNames from 'classnames';
import { MenuIcon, ArrowUpIcon, ArrowDownIcon } from 'ui/atoms/icons';
import { Grid, IconButton } from 'ui/atoms';

import { useStyles } from './SubSectionHeader.styles';
import { SubSectionHeaderProps } from './SubSectionHeader.types';

export const SubSectionHeader = ({
  children,
  toggled,
  onOptionsClick,
  onToggleClick,
  className,
  counter,
  customOption,
}: SubSectionHeaderProps) => {
  const classes = useStyles();

  return (
    <Grid className={classNames(classes.root, className)} alignItems="center" container>
      {counter && (
        <Grid item>
          <div className={classes.counter}>{counter}</div>
        </Grid>
      )}
      <Grid item>{children}</Grid>
      <Grid className={classes.menu} item>
        {customOption && (
          <IconButton onClick={onOptionsClick}>
            <MenuIcon />
          </IconButton>
        )}
        <IconButton onClick={onToggleClick} className="sub-section-header-toggle">
          {toggled ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};
