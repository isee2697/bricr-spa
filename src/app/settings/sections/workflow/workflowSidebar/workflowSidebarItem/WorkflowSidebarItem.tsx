import React from 'react';
import { useTheme } from '@material-ui/core';

import { Box } from 'ui/atoms';
import { ActionItem, TriggerItem, DndItemState } from '../../workflowItems';

import { WorkflowSidebarItemProps, WorkflowSidebarType } from './WorkflowSidebarItem.types';

export const WorkflowSidebarItem = ({ icon, title, type, searchValue }: WorkflowSidebarItemProps) => {
  const theme = useTheme();

  const getHighlightedString = () => {
    if (!searchValue.trim()) {
      return title;
    }

    const parts = title?.split(new RegExp(`(${searchValue})`, 'gi'));

    return parts?.map((part, index) =>
      part.toLowerCase().match(searchValue.toLowerCase()) ? (
        <Box key={index} component="span" color={theme.palette.red.main}>
          {part}
        </Box>
      ) : (
        part
      ),
    );
  };

  if (type === WorkflowSidebarType.ACTION) {
    return (
      <Box mb={2}>
        <ActionItem icon={icon} title={getHighlightedString()} state={DndItemState.STATIC} />
      </Box>
    );
  }

  return (
    <Box mb={3}>
      <TriggerItem icon={icon} title={getHighlightedString()} state={DndItemState.STATIC} />
    </Box>
  );
};
