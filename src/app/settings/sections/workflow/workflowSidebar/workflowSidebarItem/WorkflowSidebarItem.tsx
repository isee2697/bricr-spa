import React from 'react';

import { Typography } from 'ui/atoms';

import { WorkflowSidebarItemProps, WorkflowSidebarType } from './WorkflowSidebarItem.types';
import { useStyles } from './WorkflowSidebarItem.styles';

export const WorkflowSidebarItem = ({ icon, title, type, searchValue }: WorkflowSidebarItemProps) => {
  const classes = useStyles({ isAction: type === WorkflowSidebarType.ACTION });

  const getHighlightedString = () => {
    if (!searchValue.trim()) {
      return title;
    }

    const parts = title?.split(new RegExp(`(${searchValue})`, 'gi'));

    return parts?.map((part, index) =>
      part.toLowerCase().match(searchValue.toLowerCase()) ? (
        <span key={index} className={classes.highlight}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className={classes.item}>
      <div className={classes.itemIcon}>{icon}</div>
      <Typography variant="h5">{getHighlightedString()}</Typography>
    </div>
  );
};
