import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useForm, useFormState } from 'react-final-form';

import { AllocateCriteriaType } from 'api/types';

import { ListColumn } from './ListColumn';
import { ListType, ReorderableListProps } from './ReorderableList.types';

const list: ListType[] = Object.keys(AllocateCriteriaType).map(key => ({
  label: key,
  key,
}));

export const ReorderableList = ({ hasCheckbox }: ReorderableListProps) => {
  const [items, setItems] = useState(list);
  const { values } = useFormState({});
  const form = useForm();

  const handleUpdateListItem = (currentIndex: number, targetIndex: number) => {
    const item = items[currentIndex];

    setItems(prevState => {
      const newItems = prevState.filter((item, index) => index !== currentIndex);
      newItems.splice(targetIndex, 0, item);

      return [...newItems];
    });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ListColumn items={items} onUpdateList={handleUpdateListItem} />
      </DndProvider>
    </>
  );
};
