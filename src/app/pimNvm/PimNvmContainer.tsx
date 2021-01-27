import React, { useState } from 'react';

import { useNvmQueryParams } from 'app/shared/useNvmQueryParams/useNvmQueryParams';

import { PimNvm } from './PimNvm';

export const PimNvmContainer = () => {
  const { tab, setTab } = useNvmQueryParams();

  const [activeFilters, setActiveFilters] = useState({});

  return (
    <PimNvm
      tab={tab}
      onChangeTab={setTab}
      onFilter={filters => setActiveFilters(filters)}
      activeFilters={activeFilters}
    />
  );
};
