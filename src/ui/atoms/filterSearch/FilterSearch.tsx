import React, { useState } from 'react';

import { CheckboxDataType } from '../../molecules/filters/Filters.types';
import { SimpleSearch } from '../../molecules';

type checkboxFilterProps = {
  options: CheckboxDataType[];
};

export const FilterSearch = ({ options }: checkboxFilterProps) => {
  const [appliedOptions, setAppliedOptions] = useState<CheckboxDataType[]>(options);

  const handleSearch = (query: string) => {
    const newOptions = options.map((option: CheckboxDataType) => {
      if (option.label.toLowerCase() !== query.toLowerCase()) {
        return option;
      }
    });

    setAppliedOptions(newOptions.length > 0 ? newOptions : options);
  };

  return (
    <>
      <SimpleSearch onChange={event => handleSearch(event.target.value)} value={options} />
      {appliedOptions.map(options => {})}
    </>
  );
};
