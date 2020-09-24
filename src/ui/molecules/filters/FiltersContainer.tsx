import React from 'react';
import { AnyObject } from 'final-form';

import { FilterContainerProps } from './Filters.types';
import { Filters } from './Filters';

export const FiltersContainer = ({ isOpened, onClose }: FilterContainerProps) => {
  const handleSubmit = async (body: AnyObject) => {
    // console.log(body);
  };

  return <Filters isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
