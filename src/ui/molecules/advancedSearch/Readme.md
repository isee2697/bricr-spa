Example of AdvancedSearch

```jsx harmony
import { useState } from 'react';

import { AdvancedSearch } from './AdvancedSearch';

const searchItems = [
  {
    label: 'search.first_item',
    value: 'firstItem',
  },
  {
    label: 'search.second_item',
    value: 'secondItem',
  },
];

const [selectedItem, setSelectedItem] = useState();

<AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={setSelectedItem} value={selectedItem} />
```

```jsx harmony
import { useState } from 'react';

import { AdvancedSearch } from './AdvancedSearch';

const searchItems = [
  {
    label: 'search.first_item',
    value: 'firstItem',
  },
  {
    label: 'search.second_item',
    value: 'secondItem',
  },
];

const [selectedItem, setSelectedItem] = useState('firstItem');

<AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={setSelectedItem} value={selectedItem} />
```

```jsx harmony
import { useState } from 'react';

import { HomeIcon } from 'ui/atoms/icons';

import { AdvancedSearch } from './AdvancedSearch';

const searchItems = [
  {
    label: 'search.first_item',
    value: 'firstItem',
    icon: <HomeIcon />,
  },
  {
    label: 'search.second_item',
    value: 'secondItem',
    icon: <HomeIcon />,
  },
];

const [selectedItem, setSelectedItem] = useState('firstItem');

<AdvancedSearch items={searchItems} placeholder={'test.search_placeholder'} align="left" onChange={setSelectedItem} value={selectedItem} />
```