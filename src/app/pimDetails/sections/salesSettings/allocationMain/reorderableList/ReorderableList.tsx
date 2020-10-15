import React from 'react';

import { CheckboxField } from 'form/fields';
import { Chip } from 'ui/atoms/chip/Chip.styles';

import { useStyles } from './ReorderableList.styles';

const list = [
  { label: 'Joint income', key: 'joint_income' },
  { label: 'Minimal amount of missing documents', key: 'min_missing_documents' },
  { label: 'Number of preference interest', key: 'preference_interest' },
  { label: 'Date of registration interest', key: 'date_of_registration_interest' },
  { label: 'Additional work', key: 'additional_work' },
];

type ReorderableListProps = {
  hasCheckbox?: boolean;
};

export const ReorderableList = ({ hasCheckbox }: ReorderableListProps) => {
  const classes = useStyles();

  const handleDragStart = () => {
    console.log('drag start');
  };

  const handleDragging = () => {
    console.log('dragging...');
  };

  const handleDragEnd = () => {
    console.log('drag End');
  };

  return (
    <>
      <div className={classes.listContainer}>
        {list.map((item, index) => {
          return (
            <span
              key={index}
              className={classes.itemContainer}
              onDragStart={handleDragStart}
              onDrag={handleDragging}
              onDragEnd={handleDragEnd}
              onClick={handleDragStart}
            >
              <Chip className={classes.itemCounter} size="small" variant="outlined" color="primary" label={index + 1} />

              {hasCheckbox ? (
                <CheckboxField className={classes.item} name={item.key} label={item.label} />
              ) : (
                <span className={classes.item}>{item.label}</span>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
