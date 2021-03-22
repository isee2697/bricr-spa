Example of Filters component

```jsx harmony
import React, { useState } from 'react';

import { Box } from 'ui/atoms';

import { FiltersButton } from './FiltersButton';
import { ActiveFilters } from './activeFilters/ActiveFilters';
import { FiltersSizes, Types } from './Filters.types';

const filters = [
  {
    key: 'city',
    type: Types.Text,
    size: FiltersSizes.L,
  },
];

const [activeFilters, setActiveFilters] = useState();

<Box>
  <FiltersButton color="primary" data={[]} getActiveFilters={setActiveFilters} filters={filters} />
  <ActiveFilters activeFilters={activeFilters} onDelete={setActiveFilters} />
</Box>
```
