import React, { useState, useLayoutEffect } from 'react';

import { Box } from 'ui/atoms';
import { SearchIcon } from 'ui/atoms/icons';
import { WorkflowPlaceholder, AddPlaceholder, TriggerItem, ActionItem, DndItemState } from '../workflowItems';

import { useStyles } from './WorkflowCanvas.styles';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export const WorkflowCanvas = () => {
  const classes = useStyles();

  const [, height] = useWindowSize();
  const [topOffset, setTopOffset] = useState(0);

  return (
    <Box className={classes.container} height={height - topOffset}>
      <div ref={ref => setTopOffset(ref?.offsetTop ?? 0)} />

      {/** THE BELOW CONTENT IS JUST FOR ELEMENTS PRESENTING */}
      <Box top={108} left={108} position="absolute">
        <WorkflowPlaceholder type={WorkflowPlaceholder.types.ACTION} />
      </Box>
      <Box top={108} left={420} position="absolute">
        <WorkflowPlaceholder type={WorkflowPlaceholder.types.TRIGGER} />
      </Box>
      <Box top={108} left={732} position="absolute">
        <AddPlaceholder />
      </Box>

      <Box top={308} left={108} position="absolute">
        <WorkflowPlaceholder type={WorkflowPlaceholder.types.ACTION} hovered />
      </Box>
      <Box top={308} left={420} position="absolute">
        <WorkflowPlaceholder type={WorkflowPlaceholder.types.TRIGGER} hovered />
      </Box>

      <Box top={508} left={108} position="absolute">
        <TriggerItem icon={<SearchIcon color={'inherit'} />} title="Make an appointment" state={DndItemState.STATIC} />
      </Box>
      <Box top={508} left={420} position="absolute">
        <TriggerItem icon={<SearchIcon color={'inherit'} />} title="Make an appointment" state={DndItemState.DRAGGED} />
      </Box>
      <Box top={508} left={732} position="absolute">
        <TriggerItem icon={<SearchIcon color={'inherit'} />} title="Make an appointment" state={DndItemState.DROPPED} />
      </Box>

      <Box top={708} left={108} position="absolute">
        <ActionItem icon={<SearchIcon color={'inherit'} />} title="Send email" state={DndItemState.STATIC} />
      </Box>
      <Box top={708} left={420} position="absolute">
        <ActionItem icon={<SearchIcon color={'inherit'} />} title="Send email" state={DndItemState.DRAGGED} />
      </Box>
      <Box top={708} left={732} position="absolute">
        <ActionItem icon={<SearchIcon color={'inherit'} />} title="Send email" state={DndItemState.DROPPED} />
      </Box>
    </Box>
  );
};
