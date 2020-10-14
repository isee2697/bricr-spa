import React from 'react';
import { useDrag } from 'react-dnd';

import { Box } from 'ui/atoms';
import { ActionItem, TriggerItem, DndItemState } from '../../workflowItems';
import { WorkflowItemType } from '../../Workflow.types';

import { WorkflowSidebarItemProps } from './WorkflowSidebarItem.types';
import { useStyles } from './WorkflowSidebarItem.styles';

export const WorkflowSidebarItem = ({ type, item, searchValue }: WorkflowSidebarItemProps) => {
  const classes = useStyles();

  const [, drag, preview] = useDrag({
    item: {
      type,
      ...item,
    },
  });

  const getHighlightedString = () => {
    if (!searchValue.trim()) {
      return item.title;
    }

    const parts = item.title?.split(new RegExp(`(${searchValue})`, 'gi'));

    return parts?.map((part, index) =>
      part.toLowerCase().match(searchValue.toLowerCase()) ? (
        <Box key={index} className={classes.highlightedText} component="span">
          {part}
        </Box>
      ) : (
        part
      ),
    );
  };

  return (
    <div ref={drag}>
      {type === WorkflowItemType.ACTION && (
        <>
          <Box mb={2}>
            <ActionItem icon={item.icon} title={getHighlightedString()} state={DndItemState.STATIC} />
          </Box>
          <div ref={preview} className={classes.previewItem}>
            <ActionItem icon={item.icon} title={item.title} state={DndItemState.DRAGGED} />
          </div>
        </>
      )}
      {type === WorkflowItemType.TRIGGER && (
        <>
          <Box mb={3}>
            <TriggerItem icon={item.icon} title={getHighlightedString()} state={DndItemState.STATIC} />
          </Box>
          <div ref={preview} className={classes.previewItem}>
            <TriggerItem icon={item.icon} title={item.title} state={DndItemState.DRAGGED} />
          </div>
        </>
      )}
    </div>
  );
};
