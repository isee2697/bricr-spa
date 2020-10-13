import React, { useState } from 'react';
import { ClickAwayListener, ListItemText } from '@material-ui/core';
import classNames from 'classnames';
import { Button, List, ListItem } from 'ui/atoms';

import { useStyles, WhiteTooltip } from './Collapsed.styles';
import { CollapsedProps } from './Collapsed.types';

export const Collapsed = ({ children }: CollapsedProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <WhiteTooltip
          id="breadcrumbs_collapsable_tooltip"
          interactive
          open={open}
          arrow
          title={
            <div className={classes.tooltipContent}>
              <List>
                {children.map((child, index) => (
                  <ListItem className={classes.listItem} divider key={child.key ?? index}>
                    <ListItemText>{child}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          }
        >
          <span>
            {/*span -> FIX for Safari not displaying tooltip*/}
            <Button
              disableElevation
              variant="contained"
              className={classNames(classes.button, { open })}
              size="small"
              onClick={() => setOpen(!open)}
            >
              ...
            </Button>
          </span>
        </WhiteTooltip>
      </div>
    </ClickAwayListener>
  );
};
