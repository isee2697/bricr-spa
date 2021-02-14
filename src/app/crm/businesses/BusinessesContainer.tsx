import React, { useState } from 'react';

import { CrmItem } from '../Crm.types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CRM_BUSINESSES } from 'api/mocks/crm-business';
import { CrmType, ListCrmFilters } from 'api/types';

import { BusinessesContainerProps } from './Businesses.types';
import { Businesses } from './Businesses';

export const BusinessesContainer = (props: BusinessesContainerProps) => {
  const crms: CrmItem[] = CRM_BUSINESSES.map(crm => ({ ...mockCrm, ...crm, status: props.status }));
  const [activeFilters, setActiveFilters] = useState<ListCrmFilters>({
    type: CrmType.Business,
  });

  const handleFilterChange = (filters: ListCrmFilters) => {
    setActiveFilters(filters);
  };

  return <Businesses {...props} crms={crms} activeFilters={activeFilters} onFilter={handleFilterChange} />;
};
