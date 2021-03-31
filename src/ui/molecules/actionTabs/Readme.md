ActionTabs

```jsx harmony
import { ActionTabs } from './ActionTabs';
import { Box } from 'ui/atoms';

const tabs = [
  {
    value: 'active',
    label: 'common.active',
  },
  {
    value: 'inactive',
    label: 'common.inactive',
  },
];

<Box display="flex" alignItems="center">
  <ActionTabs tabs={tabs} status="active" onStatusChange={() => {}} amounts={{ active: 5, archived: 12}} />
</Box>
```


```jsx harmony
import { ActionTabs } from './ActionTabs';
import { Box } from 'ui/atoms';

const tabs = [
  {
    value: 'active',
    label: 'common.active',
    amount: 19,
  },
  {
    value: 'inactive',
    label: 'common.inactive',
    amount: 23,
  },
];

<Box display="flex" alignItems="center">
  <ActionTabs tabs={tabs} status="active" onStatusChange={() => {}} amounts={{ active: 5, archived: 12}} />
</Box>
```