import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useForm, useFormState } from 'react-final-form';

import { AllocateCriteria, AllocateCriteriaOrder, AllocateCriteriaType } from 'api/types';

import { ListColumn } from './ListColumn';
import { ListType } from './ReorderableList.types';

const defaultList: ListType[] = Object.keys(AllocateCriteriaType).map(key => ({
  label: key,
  key,
  checked: false,
}));

export const ReorderableList = () => {
  const {
    values: {
      criteria: { criteriaOrder },
    },
  } = useFormState<{ criteria: AllocateCriteria }>({});
  const [items, setItems] = useState<ListType[]>(defaultList);
  const form = useForm();

  useEffect(() => {
    setItems(
      !!criteriaOrder
        ? ((criteriaOrder as AllocateCriteriaOrder[])
            .sort((criteriaOrder1, criteriaOrder2) =>
              (criteriaOrder1.order as number) > (criteriaOrder2.order as number) ? 1 : -1,
            )
            .map(criteriaOrder => ({
              key: criteriaOrder.name,
              label: criteriaOrder.name,
              checked: criteriaOrder.checked,
            })) as ListType[])
        : defaultList,
    );
  }, [criteriaOrder]);

  const handleUpdateListItemsOrder = (currentItem: ListType, targetItem: ListType) => {
    const currentIndex = items.findIndex(item => item.key === currentItem.key);
    const targetIndex = items.findIndex(item => item.key === targetItem.key);

    setItems(prevState => {
      const newItems = prevState.filter((item, index) => index !== currentIndex);
      newItems.splice(targetIndex, 0, currentItem);

      form.change(
        'criteria.criteriaOrder',
        newItems.map((item: ListType, index: number) => ({
          name: item.key,
          order: index,
          checked: item.checked,
        })),
      );

      return [...newItems];
    });
  };

  const handleUpdateListItem = (newItem: ListType) => {
    setItems(prevState => {
      const newItems = [...prevState.map(item => (item.key === newItem.key ? newItem : item))];

      form.change(
        'criteria.criteriaOrder',
        newItems.map((item: ListType, index: number) => ({
          name: item.key,
          order: index,
          checked: item.checked,
        })),
      );

      return [...newItems];
    });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ListColumn
          items={items}
          onUpdateList={handleUpdateListItemsOrder}
          onUpdateCheckedStatus={handleUpdateListItem}
        />
      </DndProvider>
    </>
  );
};
