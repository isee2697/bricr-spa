import React from 'react';

import { ALLOCATE_CRITERIA_ITEMS } from 'api/mocks/allocateCriteria';

import { EditAllocateCriteria } from './EditAllocateCriteria';

export const EditAllocateCriteriaContainer = () => {
  return <EditAllocateCriteria item={ALLOCATE_CRITERIA_ITEMS[0]} />;
};
