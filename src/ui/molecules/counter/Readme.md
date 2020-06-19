Counter with left margin

```jsx harmony
import { Counter } from './Counter';
import { Box } from 'ui/atoms';

<Box display="flex" alignItems="center">
  Text
  <Counter count={5} hasMarginLeft/>
</Box>
```

Counter with right margin

```jsx harmony
import { Counter } from './Counter';
import { Box } from 'ui/atoms';

<Box display="flex" alignItems="center">
  <Counter count={5} hasMarginRight/>
  Text
</Box>
```
