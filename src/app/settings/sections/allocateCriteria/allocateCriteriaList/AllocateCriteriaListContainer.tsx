import React, { useState } from 'react';

import { AddAllocateCriteriaBody } from '../addAllocateCriteria/AddAllocateCriteriaModal.types';
import { PricingType } from 'api/types';

import { AllocateCriteriaList } from './AllocateCriteriaList';
import { AllocateCriteriaItem, AllocateCriteriaListContainerProps } from './AllocateCriteriaList.types';

export const AllocateCriteriaListContainer = (props: AllocateCriteriaListContainerProps) => {
  const [items, setItems] = useState<AllocateCriteriaItem[]>([]);

  const handleAddAllocateCriteria = async (values: AddAllocateCriteriaBody) => {
    setItems([
      ...items,
      {
        ...values,
        id: `${items.length + 1}`,
        price: PricingType.Rent,
        used: 0,
      },
    ]);

    return undefined;
  };

  return <AllocateCriteriaList {...props} items={items} onSubmit={handleAddAllocateCriteria} />;
};
