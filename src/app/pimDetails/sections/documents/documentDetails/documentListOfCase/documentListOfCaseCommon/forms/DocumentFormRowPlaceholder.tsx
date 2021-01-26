import React from 'react';
import { useDrop } from 'react-dnd';

import { TableCell, TableRow } from 'ui/atoms';

import { useStyles } from './DocumentFormRowPlaceholder.styles';

export const DocumentFormRowPlaceholder = () => {
  const classes = useStyles();
  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdatePimDocumentOrder',
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  return (
    <TableRow ref={drop}>{isDrag && isOver && <TableCell colSpan={7} className={classes.placeholder} />}</TableRow>
  );
};
