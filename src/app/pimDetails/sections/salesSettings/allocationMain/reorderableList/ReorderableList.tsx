import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ListColumn } from './ListColumn';
import { ListType, ReorderableListProps } from './ReorderableList.types';

const list: ListType[] = [
  { id: 1, label: 'Joint income', key: 'joint_income' },
  { id: 2, label: 'Minimal amount of missing documents', key: 'min_missing_documents' },
  { id: 3, label: 'Number of preference interest', key: 'preference_interest' },
  { id: 4, label: 'Date of registration interest', key: 'date_of_registration_interest' },
  { id: 5, label: 'Additional work', key: 'additional_work' },
];

export const ReorderableList = ({ hasCheckbox }: ReorderableListProps) => {
  const [items, setItems] = useState(list);

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
