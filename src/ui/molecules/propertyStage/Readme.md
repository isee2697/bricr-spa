Example of PropertyStage component

```jsx harmony
import { PropertyStage } from './PropertyStage';

const items = [
  { title: 'Acquisition', date: '10-10-2019' },
  { title: 'Order', date: '28-10-2019' },
  { title: 'List up', date: '29-10-2019' },
  { title: 'Reactions' },
  { title: 'Bidding' },
  { title: 'Sign' },
];

<PropertyStage items={items} activeItem={2} />
```
