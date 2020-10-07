import React from 'react';
import { FilterTabPanelProps } from '../Filters.types';

export const FilterTabPanel = ({ children, activeTab, id }: FilterTabPanelProps) => {
  return (
    <div role="tabpanel" hidden={activeTab !== id} id={`simple-tabpanel-${id}`} aria-labelledby={`simple-tab-${id}`}>
      {activeTab === id && children}
    </div>
  );
};
