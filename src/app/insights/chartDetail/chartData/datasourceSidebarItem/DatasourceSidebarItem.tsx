import React from 'react';
import { useDrag } from 'react-dnd';

import { Box } from 'ui/atoms';
import { DndItemState } from 'app/settings/sections/workflow/workflowItems';

import { DatasourceSidebarItemProps } from './DatasourceSidebarItem.types';
import { useStyles } from './DatasourceSidebarItem.styles';
import { SourceItem } from './../datasourceCanvas/sourceItem/SourceItem';

export const DatasourceSidebarItem = ({ item, searchValue }: DatasourceSidebarItemProps) => {
  const classes = useStyles();

  const [, drag, preview] = useDrag({
    item: {
      type: 'Chart_Datasource',
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
    <Box mb={3} position="relative">
      <div ref={drag}>
        <SourceItem icon={item.icon} title={getHighlightedString()} state={DndItemState.STATIC} />
        <div ref={preview} className={classes.previewItem}>
          <SourceItem icon={item.icon} title={item.title} state={DndItemState.DRAGGED} />
        </div>
      </div>
    </Box>
  );
};
