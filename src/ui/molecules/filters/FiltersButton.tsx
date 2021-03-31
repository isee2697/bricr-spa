import Badge from '@material-ui/core/Badge';
import React, { useCallback, useEffect, useState } from 'react';
import { AnyObject } from 'final-form';

import { IconButton } from 'ui/atoms';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';

import { FilterButtonProps } from './Filters.types';
import { Filters } from './Filters';

export const FiltersButton = ({ color = 'primary', data, getActiveFilters, filters }: FilterButtonProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filterAmount, setFilterAmount] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (body: AnyObject) => {
    const result = body;
    handleUpdate(result);

    setModalOpen(false);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleUpdate = useCallback(
    (result: AnyObject) => {
      let filterAmount = 0;

      const updateFilterAmount = (value: string[]) => {
        value.forEach((filter: string) => {
          filterAmount += 1;
        });
      };

      for (const key in result) {
        const value = result[key];

        if (typeof value === 'object') {
          updateFilterAmount(value);
        } else {
          filterAmount += 1;
        }
      }

      setFilterAmount(filterAmount);

      if (getActiveFilters) {
        getActiveFilters(result);
      }
    },
    [getActiveFilters],
  );

  useEffect(() => {
    if (data) {
      handleUpdate(data);
    }
  }, [data, handleUpdate]);

  return (
    <>
      <IconButton aria-label="manage" size="small" variant="roundedContained" onClick={() => setModalOpen(true)}>
        <Badge badgeContent={filterAmount} color={color}>
          <ManageIcon color="inherit" />
        </Badge>
      </IconButton>
      <Filters
        data={data}
        filterAmount={filterAmount}
        isOpened={isModalOpen}
        activeTab={activeTab}
        onSubmit={handleSubmit}
        onTabChange={handleTabChange}
        onDeleteFilter={handleUpdate}
        onClose={() => setModalOpen(false)}
        filters={filters}
      />
    </>
  );
};
