import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useLocale } from 'hooks';
import { CheckboxField } from 'form/fields';
import { Box, Typography } from 'ui/atoms';

import { SortCriteriaItemProps } from './SortCriteriaItem.types';
import { useStyles } from './SortCriteriaItem.styles';
import { ExtrasSwimlaneItemDragObject } from './SortingStep.types';

export const SortCriteriaItem = ({ sortCriteria, disabled, index, onUpdateItemOrder }: SortCriteriaItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [, drag] = useDrag({
    item: {
      type: 'UpdateSortCriteriaOrder',
      value: sortCriteria,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'UpdateSortCriteriaOrder',
    drop: (item: ExtrasSwimlaneItemDragObject) => {
      onUpdateItemOrder(item.value, index);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={!disabled ? drag : undefined}>
      <div ref={!disabled ? drop : undefined}>
        <Box key={index} display="flex" alignItems="center" mb={2}>
          <Typography variant="h4" className={classes.criteriaRowIndex}>
            {index + 1}
          </Typography>
          <Box width="100%" ml={2}>
            <CheckboxField
              labelPlacement="start"
              name={`sortCriteriaOrder[${index}]`}
              label={formatMessage({ id: `dictionaries.criteria_order.${sortCriteria}` })}
              value={sortCriteria}
              containerClassName={classes.criteriaRow}
              disabled={disabled}
            />
          </Box>
        </Box>
        {isDrag && isOver && <Box width="100%" className={classes.placeholder} />}
      </div>
    </div>
  );
};
