import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import clsx from 'classnames';

import {
  Box,
  Checkbox,
  IconButton,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { DocumentOutsideItem, DocumentOutsideItemState } from '../../DocumentListOfCase.types';
import { useStyles } from '../DocumentListOfCaseCommon.styles';

import { DocumentFormRowDragObject } from './DocumentFormRow.types';
import { DocumentFormRowPlaceholder } from './DocumentFormRowPlaceholder';

export const DocumentFormRow = ({ item, editing }: { item: DocumentOutsideItem; editing: boolean }) => {
  const classes = useStyles();
  const [itemState, setItemState] = useState(DocumentOutsideItemState.StaysBehind);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'UpdatePimDocumentOrder',
      ...item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdatePimDocumentOrder',
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <>
      <TableRow key={item.id} className={clsx(classes.tableRow, isOver && 'draggingOver')} innerRef={drag}>
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        <TableCell padding="none">
          <Typography variant="h3" className={classes.mediumText}>
            {item.description}
          </Typography>
        </TableCell>
        <TableCell padding="checkbox">
          <Radio
            name={`outsideOption${item.id}`}
            color="primary"
            checked={itemState === DocumentOutsideItemState.StaysBehind}
            onChange={() => editing && setItemState(DocumentOutsideItemState.StaysBehind)}
          />
        </TableCell>
        <TableCell padding="checkbox">
          <Radio
            name={`outsideOption${item.id}`}
            color="primary"
            checked={itemState === DocumentOutsideItemState.GoesWith}
            onChange={() => editing && setItemState(DocumentOutsideItemState.GoesWith)}
          />
        </TableCell>
        <TableCell padding="checkbox">
          <Radio
            name={`outsideOption${item.id}`}
            color="primary"
            checked={itemState === DocumentOutsideItemState.ForTakeover}
            onChange={() => editing && setItemState(DocumentOutsideItemState.ForTakeover)}
          />
        </TableCell>
        <TableCell padding="checkbox">
          <Radio
            name={`outsideOption${item.id}`}
            color="primary"
            checked={itemState === DocumentOutsideItemState.Nvt}
            onChange={() => editing && setItemState(DocumentOutsideItemState.Nvt)}
          />
        </TableCell>
        <TableCell align="right">
          <IconButton size="small" variant="rounded">
            <MenuIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <DocumentFormRowPlaceholder />
    </>
  );
};
