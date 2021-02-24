Example of Filters component

```jsx harmony
import React from 'react';

import { FiltersButton } from 'ui/molecules';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

const filters: FiltersTypes[] = [
  {
    key: 'city',
    type: Types.Text,
    size: FiltersSizes.L,
  },
];

<FiltersButton color="primary" data={[]} getActiveFilters={() => {}} filters={filters} />;
```
